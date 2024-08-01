import { offset_directions, landmarkArray } from './constants.js'

/**
 * Get unit direction vector from one point to another
 * @param {Object} vector1
 * @param {Object} vector2
 * @param {*} offsetDirection
 * @returns
 */
function getDirectionVector(vector1, vector2, offsetDirection) {
    const difference = subtractVectors(vector2, vector1);
    const direction = normalizeVector(difference);
    return direction;
}

function subtractVectors(vec1, vec2) {
    return {
        x: vec1.x - vec2.x,
        y: vec1.y - vec2.y,
        z: vec1.z - vec2.z,
    };
}

function vectorLength(vec) {
    return Math.sqrt(vec.x ** 2 + vec.y ** 2 + vec.z ** 2);
}

function normalizeVector(vec) {
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

/**
 * Here, we actually calculate each joint's rotation vectors based on the keypoints
 * We also store the model's world position in the hip point
 * @param {Object} keypoints
 * @returns {Object} joint directions
 */
function calcJoints(keypoints) {
    let hipPoint = getMidpoint(keypoints.LEFT_HIP, keypoints.RIGHT_HIP)
    let neckpoint = getMidpoint(keypoints.LEFT_SHOULDER, keypoints.RIGHT_SHOULDER)
    const chestPoint = getMidpoint(hipPoint, neckpoint)

    // left arm
    const armJointL1 = getDirectionVector(keypoints.LEFT_SHOULDER, keypoints.LEFT_ELBOW, offset_directions.LEFT_SHOULDER);
    const armJointL2 = getDirectionVector(keypoints.LEFT_ELBOW, keypoints.LEFT_WRIST, offset_directions.LEFT_ELBOW);
    const armJointL3 = getDirectionVector(keypoints.LEFT_WRIST, keypoints.LEFT_PINKY, offset_directions.LEFT_WRIST);

    // right arm
    const armJointR1 = getDirectionVector(keypoints.RIGHT_SHOULDER, keypoints.RIGHT_ELBOW, offset_directions.RIGHT_SHOULDER);
    const armJointR2 = getDirectionVector(keypoints.RIGHT_ELBOW, keypoints.RIGHT_WRIST, offset_directions.RIGHT_ELBOW);
    const armJointR3 = getDirectionVector(keypoints.RIGHT_WRIST, keypoints.RIGHT_PINKY, offset_directions.RIGHT_WRIST);

    // neck
    const foreheadPoint = getMidpoint(keypoints.NOSE, keypoints.RIGHT_EYE_INNER)
    const neckJoint1 = getDirectionVector(chestPoint, foreheadPoint, offset_directions.NECK);
    const neckJoint2 = foreheadPoint

    // torso
    const torsoJoint1 = getDirectionVector(hipPoint, neckpoint, offset_directions.TORSO);
    const torsoJoint2 = torsoJoint1
    const torsoJoint3 = torsoJoint1

    // left leg
    const legJointL1 = getDirectionVector(keypoints.LEFT_HIP, keypoints.LEFT_KNEE, offset_directions.LEFT_HIP);
    const legJointL2 = getDirectionVector(keypoints.LEFT_KNEE, keypoints.LEFT_ANKLE, offset_directions.LEFT_KNEE);
    const legJointL3 = getDirectionVector(keypoints.LEFT_ANKLE, keypoints.LEFT_HEEL, offset_directions.LEFT_ANKLE);
    const legJointL5 = getDirectionVector(keypoints.LEFT_FOOT_INDEX, keypoints.LEFT_HEEL, offset_directions.LEFT_ANKLE);

    // right leg
    const legJointR1 = getDirectionVector(keypoints.RIGHT_HIP, keypoints.RIGHT_KNEE, offset_directions.RIGHT_HIP);
    const legJointR2 = getDirectionVector(keypoints.RIGHT_KNEE, keypoints.RIGHT_ANKLE, offset_directions.RIGHT_KNEE);
    const legJointR3 = getDirectionVector(keypoints.RIGHT_ANKLE, keypoints.RIGHT_HEEL, offset_directions.RIGHT_ANKLE);
    const legJointR5 = getDirectionVector(keypoints.RIGHT_FOOT_INDEX, keypoints.RIGHT_HEEL, offset_directions.RIGHT_ANKLE);

    // Package joint data to be sent to the renderer
    const trackedPose = {
        hip_point: hipPoint,
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

/**
 * Calculate the direction vectors for the bones
 * @param {Array} keypoints
 */
function getDirectionVectors(keypoints) {
    let directionVectors = {};
    // if we have keypoints, update the landmarkDict
    if (keypoints && keypoints.worldLandmarks && keypoints.worldLandmarks[0]) {
      let landmarkDict = {}
      landmarkArray.forEach((landmark, index) => {
        landmarkDict[landmark] = keypoints.worldLandmarks[0][index]
      });
      // Get direction vectors for bones
      directionVectors = calcJoints(landmarkDict);
    }

    return directionVectors;
}

export default getDirectionVectors;