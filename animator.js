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

let trackingLog = [];

let armJointL1, armJointL2, armJointL3, armJointR1, armJointR2, armJointR3;
let neckJoint1, neckJoint2;
let torsoJoint1, torsoJoint2, torsoJoint3;
let legJointL1, legJointL2, legJointL3, legJointL5;
let legJointR1, legJointR2, legJointR3, legJointR5;

let scene, camera, renderer, manager, loader, controls, skeleton;

let initialStates = {}

const hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;

function vectorMagnitude(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function calcVector(src, end) {
  return [end[0] - src[0], end[1] - src[1], end[2] - src[2]];
}

function normalizeVector(v) {
  let m = vectorMagnitude(v);
  return [v[0] / m, v[1] / m, v[2] / m];
}

function landmarkToPoint(landmark) {
  return [landmark.x, landmark.y, landmark.z];
}

function averagePoints(p1, p2) {
  return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, (p1[2] + p2[2]) / 2];
}

// rotation from an up vector to vector made from given points
function absoluteRotation(src, end) {
  let vec = calcVector(src, end);
  return normalizeVector(vec);
}

// maps the model's joint names to tracking data names
const jointNamesToPoseProperties = {
  'torso_joint_1': 'torsoJoint1',
  'torso_joint_2': 'torsoJoint2',
  'neck_joint_1': 'neckJoint1',
  'neck_joint_2': 'neckJoint2',
  'arm_joint_L_1': 'armJointL1',
  'arm_joint_L_2': 'armJointL2',
  'arm_joint_L_3': 'armJointL3',
  'arm_joint_R_1': 'armJointR1',
  'arm_joint_R_2': 'armJointR2',
  'arm_joint_R_3': 'armJointR3',
  'leg_joint_L_1': 'legJointL1',
  'leg_joint_L_2': 'legJointL2',
  'leg_joint_L_3': 'legJointL3',
  'leg_joint_R_1': 'legJointR1',
  'leg_joint_R_2': 'legJointR2',
  'leg_joint_R_3': 'legJointR3'
};

// calculate the angles between each pose landmark
function onResults(results) {
  if (results && results.worldLandmarks && results.worldLandmarks[0]) {

    for (let i = 0; i < results.worldLandmarks; i++) {
      if (!results.worldLandmarks[0][i]) {
        return;
      }
    }

    let armJointR3 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][16]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][14]), landmarkToPoint(results.worldLandmarks[0][16])),
    };
    let armJointL3 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][15]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][13]), landmarkToPoint(results.worldLandmarks[0][15])),
    };
    let armJointL2 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][13]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][13]), landmarkToPoint(results.worldLandmarks[0][15])),
    }
    let armJointR2 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][14]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][14]), landmarkToPoint(results.worldLandmarks[0][16])),
    }
    let armJointL1 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][11]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][11]), landmarkToPoint(results.worldLandmarks[0][13])),
    }
    let armJointR1 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][12]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][12]), landmarkToPoint(results.worldLandmarks[0][14])),
    }
    let legJointR3 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][28]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][26]), landmarkToPoint(results.worldLandmarks[0][28])),
    };
    let legJointL3 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][27]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][25]), landmarkToPoint(results.worldLandmarks[0][27])),
    };
    let legJointR2 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][26]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][26]), landmarkToPoint(results.worldLandmarks[0][28])),
    };
    let legJointL2 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][25]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][25]), landmarkToPoint(results.worldLandmarks[0][27])),
    };
    let legJointR1 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][24]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][24]), landmarkToPoint(results.worldLandmarks[0][26])),
    };
    let legJointL1 = {
      'pos': landmarkToPoint(results.worldLandmarks[0][23]),
      'rot': absoluteRotation(landmarkToPoint(results.worldLandmarks[0][23]), landmarkToPoint(results.worldLandmarks[0][25])),
    };
    let neckPoint = averagePoints(landmarkToPoint(results.worldLandmarks[0][11]), landmarkToPoint(results.worldLandmarks[0][12]));
    let hipPoint = averagePoints(landmarkToPoint(results.worldLandmarks[0][23]), landmarkToPoint(results.worldLandmarks[0][24]));
    let chestPoint = averagePoints(neckPoint, hipPoint);
    let chest2Point = averagePoints(neckPoint, chestPoint);
    let nosePoint = averagePoints(landmarkToPoint(results.worldLandmarks[0][1]), landmarkToPoint(results.worldLandmarks[0][4]));
    let headPoint = averagePoints(neckPoint, nosePoint);

    let torsoJoint1 = {
      'pos': hipPoint,
      'rot': absoluteRotation(hipPoint, neckPoint),
    };
    let torsoJoint2 = {
      'pos': chestPoint,
      'rot': torsoJoint1['rot'],
    }
    let torsoJoint3 = {
      'pos': neckPoint,
      'rot': torsoJoint1['rot'],
    }
    let neckJoint1 = {
      'pos': neckPoint,
      'rot': absoluteRotation(neckPoint, nosePoint),
    };
    let neckJoint2 = {
      'pos': nosePoint,
      'rot': neckJoint1['rot']
    };
    let legJointR5 = legJointR3
    let legJointL5 = legJointL3

    let newPose = {
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
    }

    trackingLog.push(newPose);
    if (trackingLog.length > 4) {
      trackingLog.splice(0, 1);
    }

    // set initial values for average sum
    let trackedPoseAvg = {}
    for (let key of Object.keys(trackingLog[0])) {
      trackedPoseAvg[key] = {'pos': [...trackingLog[0][key]['pos']], 'rot': [...trackingLog[0][key]['rot']]};
    }

    // sum up values
    for (let i = 1; i < trackingLog.length; i++) {
      for (let key of Object.keys(trackingLog[i])) {
        for (let j = 0; j < trackingLog[i][key]['pos'].length; j++) {
          trackedPoseAvg[key]['pos'][j] += trackingLog[i][key]['pos'][j];
        }
        for (let j = 0; j < trackingLog[i][key]['rot'].length; j++) {
          trackedPoseAvg[key]['rot'][j] += trackingLog[i][key]['rot'][j];
        }
      }
    }

    // divide to get average
    for (let key of Object.keys(trackedPoseAvg)) {
      for (let j = 0; j < trackedPoseAvg[key]['pos'].length; j++) {
        trackedPoseAvg[key]['pos'][j] /= trackingLog.length;
      }
      for (let j = 0; j < trackedPoseAvg[key]['rot'].length; j++) {
        trackedPoseAvg[key]['rot'][j] /= trackingLog.length;
      }
    }

    trackedPoseAvg['feetMidpoint'] = {
      'pos': averagePoints(trackedPoseAvg['legJointL3'].pos, trackedPoseAvg['legJointR3'].pos)
    }
    trackedPoseAvg['feetMidpoint'].pos[1] = Math.max(trackedPoseAvg['legJointL3'].pos[1], trackedPoseAvg['legJointR3'].pos[1]);

    // set average as tracked pose
    trackedPose = trackedPoseAvg;
  } else {
    return
  }
}
const vision = await FilesetResolver.forVisionTasks(
  // path/to/wasm/root
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
);

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

  scene.add(new THREE.AmbientLight(0xffffff,1));

  // render the viewport
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.getElementById('webgl').appendChild(renderer.domElement);

  // set up orbit controls
  controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set(0, 0, 0);

  // position and orient camera
  camera.position.set(0, 5, 10);
  camera.lookAt(0, 5, 0);

  manager = new THREE.LoadingManager();
  loader = new GLTFLoader(manager);

  loader.load("RiggedFigureInBlender.gltf",function(gltf) {
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

    // get joint's from scene tree
    torsoJoint1 = armature.children[1]
    // torsoJoint1 = armature.children[0]
    torsoJoint2 = torsoJoint1.children[0]
    torsoJoint3 = torsoJoint2.children[0]
    armJointL1 = torsoJoint3.children[1]
    armJointL2 = armJointL1.children[0]
    armJointL3 = armJointL2.children[0]
    armJointR1 = torsoJoint3.children[2]
    armJointR2 = armJointR1.children[0]
    armJointR3 = armJointR2.children[0]
    neckJoint1 = torsoJoint3.children[0]
    neckJoint2 = neckJoint1.children[0]
    legJointL1 = torsoJoint1.children[1]
    legJointL2 = legJointL1.children[0]
    legJointL3 = legJointL2.children[0]
    legJointL5 = legJointL3.children[0]
    legJointR1 = torsoJoint1.children[2]
    legJointR2 = legJointR1.children[0]
    legJointR3 = legJointR2.children[0]
    legJointR5 = legJointR3.children[0]
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


function getJointVec(joint) {
  let worldRotation = joint.quaternion.clone();
  let refVec = new THREE.Vector3(0, 1, 0);
  refVec.applyQuaternion(worldRotation);
  return refVec;
}

// Given the position and rotation between two points, update the bone's quaternion
// This will propagate to child bones
function setWorldJointState(joint, position, rotVec) {
  let parent = joint.parent;
  scene.attach(joint);
  let sourceQuat = joint.quaternion.clone();
  let updateQuat = new THREE.Quaternion().setFromUnitVectors(getJointVec(joint), new THREE.Vector3(rotVec[0], -rotVec[1], -rotVec[2]));
  // post-multiply the previous quaternion
  updateQuat.multiply(sourceQuat);
  joint.quaternion.copy(updateQuat);
  // joint.position.set(position[0] * 5, -position[1] * 5, -position[2] * 5);
  parent.attach(joint);
}

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
      onResults(result)
      canvasCtx.restore();
    });
  }

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

// animate
function animate() {

  if (trackedPose) {
    let refPoint = trackedPose.feetMidpoint;

    // reset joint states
    for (let joint of joints) {
      joint.position.copy(initialStates[joint.id][0]);
      joint.quaternion.copy(initialStates[joint.id][1]);
      joint.scale.copy(initialStates[joint.id][2]);
    }

    for (let joint of joints) {
      const jointName = joint.name;
      const poseLandmark = trackedPose[jointNamesToPoseProperties[jointName]];
      if (poseLandmark == null) {
        continue;
      }

      let vec = poseLandmark.rot;
      let pos = [...poseLandmark.pos];

      pos[0] -= refPoint.pos[0];
      pos[1] -= refPoint.pos[1];
      pos[2] -= refPoint.pos[2];

      setWorldJointState(joint, pos, vec);
    }
    if (torsoJoint1)
    {
      torsoJoint1.rotation.x -= 1;
      if (trackedPose && trackedPose.torsoJoint1) {
        const newCenter = new THREE.Vector3(trackedPose.torsoJoint1.pos[0], trackedPose.torsoJoint1.pos[1], trackedPose.torsoJoint1.pos[2])
        torsoJoint1.position.set(newCenter.x / 2, newCenter.y / 2, newCenter.z / 2)
      }
    }
  }
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

init();
animate();