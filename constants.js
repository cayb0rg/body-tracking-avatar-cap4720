import {Vector3} from 'three';

/**
 * list of all the landmarks that are detected by PoseLandmarker
 */
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

/**
 * No longer used
 */
const offset_directions = {
    'LEFT_HIP': new Vector3(0, -1, 0),
    'LEFT_KNEE': new Vector3(-1, 0, 0),
    'LEFT_ANKLE': new Vector3(-1, 0, 0),

    'RIGHT_HIP': new Vector3(0, -1, 0),
    'RIGHT_KNEE': new Vector3(1, 0, 0),
    'RIGHT_ANKLE': new Vector3(1, 0, 0),

    'NECK': new Vector3(0, 1, 0),

    'LEFT_SHOULDER': new Vector3(0, -1, 0),
    'LEFT_ELBOW': new Vector3(0, -1, 0),
    'LEFT_WRIST': new Vector3(0, -1, 0),

    'RIGHT_SHOULDER': new Vector3(0, 1, 0),
    'RIGHT_ELBOW': new Vector3(0, 1, 0),
    'RIGHT_WRIST': new Vector3(0, 1, 0),

    'TORSO': new Vector3(1, 0, 0),
    'TORSO1': new Vector3(0, -1, 0),
    'TORSO3': new Vector3(0, -1, 0),
};

export {
    landmarkArray,
    offset_directions
}