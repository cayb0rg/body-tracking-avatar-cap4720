import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DrawingUtils, FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision';

const video = document.getElementById('video')
const canvasElement = document.getElementById('drawingutils');
const canvasCtx = canvasElement.getContext('2d');
const drawingUtils = new DrawingUtils(canvasCtx);

let trackedPose = {}
let joints = []

let poseLandmarker;
let runningMode = "VIDEO";
let webcamRunning = false;
const videoHeight = "360px";
const videoWidth = "480px";

let armJointL1, armJointL2, armJointL3, armJointR1, armJointR2, armJointR3;
let neckJoint1, neckJoint2;
let torsoJoint1, torsoJoint2, torsoJoint3;
let legJointL1, legJointL2, legJointL3, legJointL5;
let legJointR1, legJointR2, legJointR3, legJointR5;

let scene, camera, renderer, manager, loader, controls, skeleton;

let worldPosition, landmarkDict;

let initialStates = {}

let axisAngles = {}

const hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;

const createPoseLandmarker = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
  );
  poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
      // modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task`,
      delegate: "GPU",
    },
    runningMode: "VIDEO",
    numPoses: 2,
  });
};

let lastVideoTime = -1;

// load rayman

function init() {

  canvasElement.style.height = videoHeight;
  video.style.height = videoHeight;
  canvasElement.style.width = videoWidth;
  video.style.width = videoWidth;


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
  const light = new THREE.AmbientLight( 0xFFFFFF ); // white light
  scene.add( light );

  // Tip toe through the window with meeeeeeee
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xcccccc));
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.getElementById('webgl').appendChild(renderer.domElement);

  // We movin' in this scene
  controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set(0, 0, 0);

  // Look at my center of origin when I'm speaking to you
  camera.position.set(0, 5, 10);
  camera.lookAt(0, 5, 0);

  manager = new THREE.LoadingManager();
  loader = new GLTFLoader(manager);

  // Load them bad boy GLTFs
  loader.load("RiggedFigureInBlender.gltf",function(gltf) {
    // A new model has joined the party
    const mesh = gltf.scene;
    mesh.children[0].material = new THREE.MeshLambertMaterial();
    mesh.scale.set(10, 10, 10)

    scene.add(mesh);
    console.log(mesh)

    // render the model
    renderer.render(scene, camera);

    // const armature = mesh.children[0].children[0];
    const armature = mesh.children[0].children[0];

    skeleton = new THREE.SkeletonHelper( armature );
    skeleton.visible = true;
    scene.add( skeleton );

    // Get skinnin' data YEE HAW
    armJointL1 = skeleton.bones.find(bone => bone.name === 'arm_joint_L_1');
    armJointL2 = skeleton.bones.find(bone => bone.name === 'arm_joint_L_2');
    armJointL3 = skeleton.bones.find(bone => bone.name === 'arm_joint_L_3');
    armJointR1 = skeleton.bones.find(bone => bone.name === 'arm_joint_R_1');
    armJointR2 = skeleton.bones.find(bone => bone.name === 'arm_joint_R_2');
    armJointR3 = skeleton.bones.find(bone => bone.name === 'arm_joint_R_3');
    neckJoint1 = skeleton.bones.find(bone => bone.name === 'neck_joint_1');
    neckJoint2 = skeleton.bones.find(bone => bone.name === 'neck_joint_2');
    torsoJoint1 = skeleton.bones.find(bone => bone.name === 'torso_joint_1');
    torsoJoint2 = skeleton.bones.find(bone => bone.name === 'torso_joint_2');
    torsoJoint3 = skeleton.bones.find(bone => bone.name === 'torso_joint_3');
    legJointL1 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_1');
    legJointL2 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_2');
    legJointL3 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_3');
    legJointL5 = skeleton.bones.find(bone => bone.name === 'leg_joint_L_5');
    legJointR1 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_1');
    legJointR2 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_2');
    legJointR3 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_3');
    legJointR5 = skeleton.bones.find(bone => bone.name === 'leg_joint_R_5');

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

    initialStates = {};
    for (let joint of joints) {
      initialStates[joint.id] = [joint.position.clone(), joint.quaternion.clone(), joint.scale.clone()];
    }
  });

}

// Given the position and rotation between two points, update the bone's quaternion
// This will propagate to child bones
function setQuaternions(joint, newAxis) {
  let parent = joint.parent;
  scene.attach(joint);
  let currentQuat = joint.quaternion.clone();

  let worldRotation = joint.quaternion.clone();
  let refVec = new THREE.Vector3(0, 1, 0);
  refVec.applyQuaternion(worldRotation);
  let newQuat = new THREE.Quaternion().setFromUnitVectors(refVec, new THREE.Vector3(newAxis.x , - newAxis.y , - newAxis.z));
  // post-multiply the previous quaternion
  newQuat.multiply(currentQuat);
  joint.quaternion.copy(newQuat);
  parent.attach(joint);
}

const landmarkArray = [
  'NOSE',
  'LEFT_EYE_INNER',
  'LEFT_EYE',
  'LEFT_EYE_OUTER',
  'RIGHT_EYE_INNER',
  'RIGHT_EYE',
  'RIGHT_EYE_OUTER',
  'LEFT_EAR',
  'RIGHT_EAR',
  'MOUTH_LEFT',
  'MOUTH_RIGHT',
  'LEFT_SHOULDER',
  'RIGHT_SHOULDER',
  'LEFT_ELBOW',
  'RIGHT_ELBOW',
  'LEFT_WRIST',
  'RIGHT_WRIST',
  'LEFT_PINKY',
  'RIGHT_PINKY',
  'LEFT_INDEX',
  'RIGHT_INDEX',
  'LEFT_THUMB',
  'RIGHT_THUMB',
  'LEFT_HIP',
  'RIGHT_HIP',
  'LEFT_KNEE',
  'RIGHT_KNEE',
  'LEFT_ANKLE',
  'RIGHT_ANKLE',
  'LEFT_HEEL',
  'RIGHT_HEEL',
  'LEFT_FOOT_INDEX',
  'RIGHT_FOOT_INDEX'
];

function subtractVectors(vec1, vec2) {
  return {
      x: vec1.x - vec2.x,
      y: vec1.y - vec2.y,
      z: vec1.z - vec2.z,
  };
}

const offset_directions = {
  'LEFT_HIP': new THREE.Vector3(0, -1, 0),
  'LEFT_KNEE': new THREE.Vector3(-1, 0, 0),
  'LEFT_ANKLE': new THREE.Vector3(-1, 0, 0),

  'RIGHT_HIP': new THREE.Vector3(0, -1, 0),
  'RIGHT_KNEE': new THREE.Vector3(1, 0, 0),
  'RIGHT_ANKLE': new THREE.Vector3(1, 0, 0),

  'NECK': new THREE.Vector3(0, 1, 0),

  'LEFT_SHOULDER': new THREE.Vector3(0, -1, 0),
  'LEFT_ELBOW': new THREE.Vector3(0, -1, 0),
  'LEFT_WRIST': new THREE.Vector3(0, -1, 0),

  'RIGHT_SHOULDER': new THREE.Vector3(0, 1, 0),
  'RIGHT_ELBOW': new THREE.Vector3(0, 1, 0),
  'RIGHT_WRIST': new THREE.Vector3(0, 1, 0),

  'TORSO': new THREE.Vector3(1, 0, 0),
  'TORSO1': new THREE.Vector3(0, -1, 0),
  'TORSO3': new THREE.Vector3(0, -1, 0),
};
function vectorLength(vec) {
  return Math.sqrt(vec.x ** 2 + vec.y ** 2 + vec.z ** 2);
}

function normalizeVector2(vec) {
    const length = vectorLength(vec);
    return {
        x: vec.x / length,
        y: vec.y / length,
        z: vec.z / length,
    };
}
function getMidpoint(point1, point2) {
  return {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2,
    z: (point1.z + point2.z) / 2,
  };
}

function vectorRotation(vector1, vector2, offsetDirection) {
  const difference = subtractVectors(vector2, vector1);
  const direction = normalizeVector2(difference);
  return direction;
}

function calcJoints(keypoints) {
  let hipPoint = getMidpoint(keypoints.LEFT_HIP, keypoints.RIGHT_HIP)
  worldPosition = hipPoint;
  let neckpoint = getMidpoint(keypoints.LEFT_SHOULDER, keypoints.RIGHT_SHOULDER)
  const chestPoint = getMidpoint(hipPoint, neckpoint)

  // left arm
  const armJointL1 = vectorRotation(keypoints.LEFT_SHOULDER, keypoints.LEFT_ELBOW, offset_directions.LEFT_SHOULDER);
  const armJointL2 = vectorRotation(keypoints.LEFT_ELBOW, keypoints.LEFT_WRIST, offset_directions.LEFT_ELBOW);
  const armJointL3 = vectorRotation(keypoints.LEFT_WRIST, keypoints.LEFT_PINKY, offset_directions.LEFT_WRIST);

  // right arm
  const armJointR1 = vectorRotation(keypoints.RIGHT_SHOULDER, keypoints.RIGHT_ELBOW, offset_directions.RIGHT_SHOULDER);
  const armJointR2 = vectorRotation(keypoints.RIGHT_ELBOW, keypoints.RIGHT_WRIST, offset_directions.RIGHT_ELBOW);
  const armJointR3 = vectorRotation(keypoints.RIGHT_WRIST, keypoints.RIGHT_PINKY, offset_directions.RIGHT_WRIST);

  // neck
  const foreheadPoint = getMidpoint(keypoints.NOSE, keypoints.RIGHT_EYE_INNER)
  const neckJoint1 = vectorRotation(neckpoint, foreheadPoint, offset_directions.NECK);
  const neckJoint2 = neckJoint1

  // torso
  const torsoJoint1 = vectorRotation(hipPoint, neckpoint, offset_directions.TORSO);
  const torsoJoint2 = torsoJoint1
  const torsoJoint3 = torsoJoint1

  // left leg
  const legJointL1 = vectorRotation(keypoints.LEFT_HIP, keypoints.LEFT_KNEE, offset_directions.LEFT_HIP);
  const legJointL2 = vectorRotation(keypoints.LEFT_KNEE, keypoints.LEFT_ANKLE, offset_directions.LEFT_KNEE);
  const legJointL3 = vectorRotation(keypoints.LEFT_ANKLE, keypoints.LEFT_HEEL, offset_directions.LEFT_ANKLE);
  const legJointL5 = vectorRotation(keypoints.LEFT_HEEL, keypoints.LEFT_FOOT_INDEX, offset_directions.LEFT_ANKLE);

  // right leg
  const legJointR1 = vectorRotation(keypoints.RIGHT_HIP, keypoints.RIGHT_KNEE, offset_directions.RIGHT_HIP);
  const legJointR2 = vectorRotation(keypoints.RIGHT_KNEE, keypoints.RIGHT_ANKLE, offset_directions.RIGHT_KNEE);
  const legJointR3 = vectorRotation(keypoints.RIGHT_ANKLE, keypoints.RIGHT_HEEL, offset_directions.RIGHT_ANKLE);
  const legJointR5 = vectorRotation(keypoints.RIGHT_HEEL, keypoints.RIGHT_FOOT_INDEX, offset_directions.RIGHT_ANKLE);

  // Package joint data to be sent to the renderer
  const trackedPose = {
    arm_joint_L_1: armJointL1,
    arm_joint_L_2: armJointL2,
    arm_joint_L_3: armJointL3,
    arm_joint_R_1: armJointR1,
    arm_joint_R_2: armJointR2,
    arm_joint_R_3: armJointR3,
    neck_joint_1: neckJoint1,
    neck_joint_2: neckJoint2,
    torso_joint_1: torsoJoint1,
    torso_joint_2: torsoJoint2,
    torso_joint_3: torsoJoint3,
    leg_joint_L_1: legJointL1,
    leg_joint_L_2: legJointL2,
    leg_joint_L_3: legJointL3,
    leg_joint_R_1: legJointR1,
    leg_joint_R_2: legJointR2,
    leg_joint_R_3: legJointR3,
    leg_joint_L_5: legJointL5,
    leg_joint_R_5: legJointR5,
  };

  return trackedPose;
}

function getKeyPointAnimationMatrices(keypoints) {
  landmarkDict = {}
  if (keypoints && keypoints.worldLandmarks && keypoints.worldLandmarks[0]) {
    landmarkArray.forEach((landmark, index) => {
      landmarkDict[landmark] = keypoints.worldLandmarks[0][index]
    });
    // Get direction vectors for bones
    axisAngles = calcJoints(landmarkDict);
  }
}

let log = []
let logCounter = 0

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

let currentAverage = null

// Get pose landmarks from webcam
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
      // SMOOTH MCGROOVE
      log[logCounter] = result
      if (!currentAverage) currentAverage = result
      if (logCounter == 10) {
        logCounter = 0
      }
      currentAverage = getAverages(log)
      getKeyPointAnimationMatrices(currentAverage)
      logCounter++;
      canvasCtx.restore();
    });
  }

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

// Animmamtttateatmatametametmamtmeta
function animate() {

  if (trackedPose) {
    for (let joint of joints) {
      joint.position.copy(initialStates[joint.id][0]);
      joint.quaternion.copy(initialStates[joint.id][1]);
      joint.scale.copy(initialStates[joint.id][2]);

      const jointName = joint.name;

      const newAxis = axisAngles[jointName];
      if (newAxis == null) {
        continue;
      }
      setQuaternions(joint, newAxis)
    }
    if (torsoJoint1)
    {
      torsoJoint1.rotation.x -= 1
      if (worldPosition) {
        scene.attach(torsoJoint1);
        const newCenter = new THREE.Vector3(worldPosition[0], worldPosition[1], worldPosition[2])
        torsoJoint1.position.set(newCenter.x * 2, newCenter.y * 2, newCenter.z * 2)
        torsoJoint1.updateMatrixWorld();

        for (let joint of joints) {
          let parent = joint.parent;
          scene.attach(joint);
          joint.position.add(new THREE.Vector3(worldPosition[0], worldPosition[1], worldPosition[2]));
          joint.updateMatrixWorld();
          parent.attach(joint);
        }
      }
    }
  }
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

init();
animate();