import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DrawingUtils, FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision';
import getDirectionVectors from './getDirectionVectors.js';

// Container for displaying webcam
const video = document.getElementById('video')
// Canvas for drawing poselandmarker data
const canvasElement = document.getElementById('drawingutils');
const canvasCtx = canvasElement.getContext('2d');
const drawingUtils = new DrawingUtils(canvasCtx);

let poseLandmarker;
let runningMode = "VIDEO";
let webcamRunning = false;
const videoHeight = "360px";
const videoWidth = "480px";

let joints = [] // array of joints in model to animate

// Global variables for Three.js
let scene, camera, renderer, mesh

// Initial positions, orientations, and scales of each joint
let initialStates = {}

// Direction vectors for each joint, calculated from poselandmarker data
let directionVectors = {}

const hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;

/**
 * Create a PoseLandmarker instance configured to decode frames from a livestream of webcam video
 */
const createPoseLandmarker = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
  );
  poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`, // lite model
      // modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task`, // heavy model
      delegate: "GPU",
    },
    runningMode: "VIDEO",
    numPoses: 1, // maximum number of poses to detect
  });
};

let lastVideoTime = -1;

/**
 * Log and return the average of the last LOG_MAX frames
 */
let log = []
let logCounter = 0
let currentAverage = null
const LOG_MAX = 10;

function getAverages(log) {
  let numLogs = log.length
  let landmarks = Array(33).fill().map(() => ({ x: 0, y: 0, z: 0 }));
  let worldLandmarks = Array(33).fill().map(() => ({ x: 0, y: 0, z: 0 }));
  for (let i = 0; i < log.length; i++) {
    if (!log[i].landmarks[0] || log[i].landmarks[0].length < 33) {
      numLogs--;
      continue;
    }
    for (let j = 0; j < log[i].landmarks[0].length; j++) {
      let jointData = log[i].landmarks[0][j]
      landmarks[j].x += jointData.x
      landmarks[j].y += jointData.y
      landmarks[j].z += jointData.z
    }
    for (let j = 0; j < log[i].worldLandmarks[0].length; j++) {
      let jointData = log[i].worldLandmarks[0][j]
      worldLandmarks[j].x += jointData.x
      worldLandmarks[j].y += jointData.y
      worldLandmarks[j].z += jointData.z
    }
  }
  for (let j = 0; j < landmarks.length; j++) {
    landmarks[j].x /= numLogs
    landmarks[j].y /= numLogs
    landmarks[j].z /= numLogs
  }
  for (let j = 0; j < worldLandmarks.length; j++) {
    worldLandmarks[j].x /= numLogs
    worldLandmarks[j].y /= numLogs
    worldLandmarks[j].z /= numLogs
  }
  return {
    landmarks: {
      0: landmarks
    },
    worldLandmarks: {
      0: worldLandmarks
    }
  }
}

/**
 * Get pose landmarks from webcam
 */
async function predictWebcam() {
  canvasElement.style.height = videoHeight;
  video.style.height = videoHeight;
  canvasElement.style.width = videoWidth;
  video.style.width = videoWidth;
  // Now let's start detecting the stream.
  if (runningMode === "IMAGE") {
    runningMode = "VIDEO";
    await poseLandmarker.setOptions({ runningMode: "VIDEO" });
  }
  let startTimeMs = performance.now();
  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    poseLandmarker.detectForVideo(video, startTimeMs, (result) => {
      // Draw the pose landmarks on the canvas
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      for (const landmark of result.landmarks) {
        drawingUtils.drawLandmarks(landmark, {
          radius: (data) => {
            return DrawingUtils.lerp(data.z, -0.15, 0.1, 5, 1)
          }
        });
        drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
      }
      // SMOOTH MCGROOVE (average the last LOG_MAX frames)
      log[logCounter] = result
      if (!currentAverage) currentAverage = result
      if (logCounter == LOG_MAX) {
        logCounter = 0
      }
      logCounter++;
      currentAverage = getAverages(log)
      // update the directionVectors with the current average poselandmarker data
      directionVectors = getDirectionVectors(currentAverage)
      canvasCtx.restore();
    });
  }

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

/**
 * Animmamtttateatmatametametmamtmeta loop
 */
function animate() {
  let worldPosition = directionVectors.hip_point;

  if (mesh && worldPosition) {
    // Position the model at the center of the screen
    mesh.position.x = ((worldPosition.x + 0.4) * 2.0)
    mesh.position.y = ((worldPosition.y + 0.4) * 2.0)
    mesh.position.z = ((worldPosition.z + 0.4) * 2.0)
    // Scale model up to be visible
    mesh.scale.x = 12.0
    mesh.scale.y = 12.0
    mesh.scale.z = 12.0
    // Recursively update the global transforms of parents and children
    mesh.updateWorldMatrix(true, true)
    // Reattach the model to the scene to apply new global transforms
    scene.attach(mesh)
  }

  for (let joint of joints) {
    // Reset each joint to its initial state before applying new transformations
    joint.position.copy(initialStates[joint.id][0]);
    joint.quaternion.copy(initialStates[joint.id][1]);
    joint.scale.copy(initialStates[joint.id][2]);

    const jointName = joint.name;

    const vTo = directionVectors[jointName];
    if (vTo == null) {
      continue;
    }
    // Detach joint from parent and add to scene
    let parent = joint.parent;
    scene.attach(joint);

    // Save current world rotation to apply new rotation to later
    let currentQuat = joint.quaternion.clone();
    // Create a copy of the joint's current rotation
    let worldRotation = joint.quaternion.clone();
    // The "from" vector is the default "up" direction
    let vFrom = new THREE.Vector3(0, 1, 0);
    // Transform the "from" vector to the joint's current world rotation
    // to get the actual initial direction vector
    vFrom.applyQuaternion(worldRotation);
    // Compute a quaternion from the new direction vector
    // setFromUnitVectors sets the quaternion to the rotation required to rotate direction vector vFrom to direction vector vTo
    let newQuat = new THREE.Quaternion().setFromUnitVectors(vFrom, new THREE.Vector3(vTo.x , - vTo.y , - vTo.z));
    // post-multiply the previous quaternion with the new quaternion
    newQuat.multiply(currentQuat);
    joint.quaternion.copy(newQuat); // apply the new quaternion to the joint
    // Reattach joint to parent. This also updates any children of the joint
    parent.attach(joint);
  }
  requestAnimationFrame(animate); // calls the animate function again

  renderer.render(scene, camera); // render the scene in WebGL
};


/**
 * Initialize the scene, camera, and renderer
 * Load the 3D model and set up the skeleton's initial state
 */
function init() {
  if (hasGetUserMedia()) {
    if (webcamRunning === true) {
      webcamRunning = false;
    } else {
      webcamRunning = true;
    }

    // getUsermedia parameters.
    const constraints = {
      video: true
    };

    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.addEventListener("loadeddata", predictWebcam);
    });
  }

  createPoseLandmarker();

  // initlize scene and camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  var axesHelper = new THREE.AxesHelper( 10 );
  scene.add( axesHelper );

  // Let there be light
  const light = new THREE.AmbientLight( 0xAAAAAA ); // white light
  scene.add( light );

  // Directional light
  const directionalLight = new THREE.DirectionalLight( 0xf00fff, 1.0 );
  directionalLight.position.set( 0, 1, 0 );
  scene.add( directionalLight );

  // Tip toe through the window with meeeeeeee
  renderer = new THREE.WebGLRenderer();
  // renderer.setClearColor(new THREE.Color(0xcccccc));
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75);
  document.getElementById('webgl').appendChild(renderer.domElement);

  // We movin' in this scene
  let controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set(0, 0, 0);

  // Look at my center of origin when I'm speaking to you
  camera.position.set(0, 5, 15);
  camera.lookAt(0, 10, 0);

  let manager = new THREE.LoadingManager();
  let loader = new GLTFLoader(manager);

  // Load them bad boy GLTFs
  loader.load("RiggedFigureInBlender.gltf",function(gltf) {
    // A new model has joined the party
    mesh = gltf.scene;
    mesh.children[0].material = new THREE.MeshLambertMaterial();
    scene.add(mesh);

    // render the model
    renderer.render(scene, camera);

    /** Get skinnin' data YEE HAW (for collada files) */
    // let skeleton = new THREE.SkeletonHelper( armature );
    // skeleton.visible = true;
    // scene.add( skeleton );
    // armJointL1 = skeleton.bones.find(bone => bone.name === 'arm_joint_L_1');
    // armJointL2 = skeleton.bones.find(bone => bone.name === 'arm_joint_L_2');
    // armJointL3 = skeleton.bones.find(bone => bone.name === 'arm_joint_L_3');
    // armJointR1 = skeleton.bones.find(bone => bone.name === 'arm_joint_R_1');
    // armJointR2 = skeleton.bones.find(bone => bone.name === 'arm_joint_R_2');
    // armJointR3 = skeleton.bones.find(bone => bone.name === 'arm_joint_R_3');
    // neckJoint1 = skeleton.bones.find(bone => bone.name === 'neck_joint_1');
    // neckJoint2 = skeleton.bones.find(bone => bone.name === 'neck_joint_2');
    // torsoJoint1 = skeleton.bones.find(bone => bone.name === 'torso_joint_1');
    // torsoJoint2 = skeleton.bones.find(bone => bone.name === 'torso_joint_2');
    // torsoJoint3 = skeleton.bones.find(bone => bone.name === 'torso_joint_3');
    // legJointL1 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_1');
    // legJointL2 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_2');
    // legJointL3 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_3');
    // legJointL5 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_5');
    // legJointR1 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_1');
    // legJointR2 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_2');
    // legJointR3 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_3');
    // legJointR5 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_5');

    /** Find the joints in GLTF that we can control using pose landmarker data */

    let armature = mesh.children[0].children[0];
    let torsoJoint1 = armature.children[1]
    let torsoJoint2 = torsoJoint1.children[0]
    let torsoJoint3 = torsoJoint2.children[0]
    let armJointL1 = torsoJoint3.children[1]
    let armJointL2 = armJointL1.children[0]
    let armJointL3 = armJointL2.children[0]
    let armJointR1 = torsoJoint3.children[2]
    let armJointR2 = armJointR1.children[0]
    let armJointR3 = armJointR2.children[0]
    let neckJoint1 = torsoJoint3.children[0]
    let neckJoint2 = neckJoint1.children[0]
    let legJointL1 = torsoJoint1.children[1]
    let legJointL2 = legJointL1.children[0]
    let legJointL3 = legJointL2.children[0]
    let legJointL5 = legJointL3.children[0]
    let legJointR1 = torsoJoint1.children[2]
    let legJointR2 = legJointR1.children[0]
    let legJointR3 = legJointR2.children[0]
    let legJointR5 = legJointR3.children[0]

    // create array of joints to iterate over while animating
    joints = [
      armJointL1,
      armJointL2,
      armJointL3,
      armJointR1,
      armJointR2,
      armJointR3,
      neckJoint1,
      neckJoint2,
      torsoJoint1,
      torsoJoint2,
      torsoJoint3,
      legJointL1,
      legJointL2,
      legJointL3,
      legJointL5,
      legJointR1,
      legJointR2,
      legJointR3,
      legJointR5
    ];

    // store the initial state of each joint so we can reset the joints to their
    // original positions, orientations, and scales before applying new transformations
    initialStates = {};
    for (let joint of joints) {
      initialStates[joint.id] = [joint.position.clone(), joint.quaternion.clone(), joint.scale.clone()];
    }
  });

}

init();
animate();