# Import necessary libraries
import pygame as pg
from OpenGL.GL import *
import numpy as np
from pygltflib import GLTF2

import shaderLoader
from guiV3 import SimpleGUI

import pyrr
import time
import calculate_joint_angles
import math

MAX_WEIGHTS = 4
MAX_JOINTS = 19

class Joint:
    def __init__(self, name, inverse_bind_matrix, children, rotation, scale, translation):
        self.name = name
        self.inverse_bind_matrix = inverse_bind_matrix
        self.children = children
        self.local_translation = pyrr.matrix44.create_from_translation(translation)
        self.local_rotation = pyrr.matrix44.create_from_quaternion(rotation)
        self.local_scale = pyrr.matrix44.create_from_scale(scale)
        trans_matrix = pyrr.matrix44.multiply(self.local_translation, self.local_rotation)
        self.local_transform = pyrr.matrix44.multiply(trans_matrix, self.local_scale)
        self.parent = -1

    def set_local_rotation(self, rotation):
        self.local_rotation = pyrr.matrix44.create_from_quaternion(rotation)
        trans_matrix = pyrr.matrix44.multiply(self.local_translation, self.local_rotation)
        # update local transform
        self.local_transform = pyrr.matrix44.multiply(trans_matrix, self.local_scale)

    def print_hierarchy(self, level=0):
        indent = "  " * level
        print(f"{indent}Joint: {self.name}")
        print(f"{indent}Parent: {nodes[self.parent].name}")
        # print(f"{indent}  Local Transform:\n{self.local_transform}")
        # print(f"{indent}  Local Inverse Bind Matrix:\n{self.inverse_bind_matrix}")

        for child_joint in self.children:
            joints_dict[nodes[child_joint].name].print_hierarchy(level + 1)

pose_keypoints = np.array([16, 14, 12, 11, 13, 15, 24, 23, 25, 26, 27, 28])
joints_dict = {}
nodes = []

def read_keypoints(filename):
    fin = open(filename, 'r')

    kpts = []
    while(True):
        line = fin.readline()
        if line == '': break

        line = line.split()
        line = [float(s) for s in line]

        line = np.reshape(line, (len(pose_keypoints), -1))
        kpts.append(line)

    kpts = np.array(kpts)
    return kpts

def get_numpy_dtype(component_type):
    component_type_mapping = {
        5120: np.int8,
        5121: np.uint8,
        5122: np.int16,
        5123: np.uint16,
        5125: np.uint32,
        5126: np.float32
    }

    return component_type_mapping.get(component_type, object)

def is_integer_dtype(numpy_dtype):
    return np.issubdtype(numpy_dtype, np.integer)

def numberOfComponentsForType(type):
    if type == "SCALAR":
        return 1
    elif type == "VEC2":
        return 2
    elif type == "VEC3":
        return 3
    elif type == "VEC4":
        return 4
    elif type == "MAT4":
        return 16
    elif type == "MAT3":
        return 9
    elif type == "MAT2":
        return 4
    # Add more cases for other types as needed
    else:
        raise ValueError(f"Unsupported accessor type: {type}")

def loadBufferData(accessor_index):
    # Get the accessor and bufferView
    accessor = accessors[accessor_index]
    bufferViewIndex = accessor.bufferView
    bufferView = gltf.bufferViews[bufferViewIndex]
    bufferData = gltf.buffers[bufferView.buffer]
    path = "../" + bufferData.uri
    # path = "MayaCharacter/" + bufferData.uri

    with open(path, "rb") as fd:
        data = fd.read()
    # Extract buffer data based on byte offset and length
    byteOffset = bufferView.byteOffset
    byteLength = bufferView.byteLength
    buffer_data = np.frombuffer(data[byteOffset:byteOffset + byteLength], dtype=get_numpy_dtype(accessor.componentType))
    values = np.array(buffer_data)
    return values


def traverse_node_tree(root, tab):
    print(f'{"": <{tab}} ', root.name)
    tab += 1
    for child in root.children:
        traverse_node_tree(nodes[child], tab)

def vector_rotation(vector1, vector2):
    # Ensure the vectors are normalized
    vector1 = vector1 / np.linalg.norm(vector1)
    vector2 = vector2 / np.linalg.norm(vector2)

    # Calculate the rotation axis
    axis = np.cross(vector1, vector2)
    axis /= np.linalg.norm(axis)

    # Calculate the rotation angle
    cos_theta = np.dot(vector1, vector2)
    angle = np.arccos(cos_theta)

    # Create a quaternion representing the rotations in_half_angle = np.sin(angle / 2)
    sin_half_angle = np.sin(angle / 2)
    quaternion = np.array([np.cos(angle / 2), sin_half_angle * axis[0], sin_half_angle * axis[1], sin_half_angle * axis[2]])

    return quaternion


def calc_joints(keypoints):
    for kp, pos in keypoints.items():
        if kp != 'hierarchy' and kp != 'joints' and kp != 'root_joint':
            if (pos[0] == -1 and pos[1] == -1 and pos[2] == -1) or math.isnan((pos[0])) or math.isnan((pos[1])) or math.isnan((pos[2])):
                pos = np.array([0, 0, 0])
    # left arm
    arm_joint_L_1 = vector_rotation(keypoints['leftshoulder'], keypoints['leftelbow'])
    arm_joint_L_2 = vector_rotation(keypoints['leftelbow'], keypoints['leftwrist'])
    arm_joint_L_3 = np.array([1, 0, 0, 1])

    # right arm
    arm_joint_R_1 = vector_rotation(keypoints['rightshoulder'], keypoints['rightelbow'])
    arm_joint_R_2 = vector_rotation(keypoints['rightelbow'], keypoints['rightwrist'])
    arm_joint_R_3 = np.array([-1, 0, 0, 1])

    # neck
    neck_joint_1 = np.array([0, 1, 0, 1])
    neck_joint_2 = np.array([0, 1, 0, 1])

    # torso
    torso_joint_3 = np.array([0, 1, 0, 1])
    torso_joint_2 = vector_rotation(keypoints['hips'], keypoints['neck'])
    torso_joint_1 = np.array([0, 1, 0, 1])

    # left leg
    leg_joint_L_1 = vector_rotation(keypoints['lefthip'], keypoints['leftknee'])
    leg_joint_L_2 = vector_rotation(keypoints['leftknee'], keypoints['leftfoot'])
    leg_joint_L_3 = np.array([1, 0, 0, 1])
    leg_joint_L_5 = np.array([1, 0, 0, 1])

    # right leg
    leg_joint_R_1 = vector_rotation(keypoints['righthip'], keypoints['rightknee'])
    leg_joint_R_2 = vector_rotation(keypoints['rightknee'], keypoints['rightfoot'])
    leg_joint_R_3 = np.array([1, 0, 0, 1])
    leg_joint_R_5 = np.array([1, 0, 0, 1])

    # Package joint data to be sent to the renderer
    tracked_pose = {
        'arm_joint_L_1': arm_joint_L_1,
        'arm_joint_L_2': arm_joint_L_2,
        'arm_joint_L_3': arm_joint_L_3,
        'arm_joint_R_1': arm_joint_R_1,
        'arm_joint_R_2': arm_joint_R_2,
        'arm_joint_R_3': arm_joint_R_3,
        'neck_joint_1': neck_joint_1,
        'neck_joint_2': neck_joint_2,
        'torso_joint_1': torso_joint_1,
        'torso_joint_2': torso_joint_2,
        'torso_joint_3': torso_joint_3,
        'leg_joint_L_1': leg_joint_L_1,
        'leg_joint_L_2': leg_joint_L_2,
        'leg_joint_L_3': leg_joint_L_3,
        'leg_joint_R_1': leg_joint_R_1,
        'leg_joint_R_2': leg_joint_R_2,
        'leg_joint_R_3': leg_joint_R_3,
        'leg_joint_L_5': leg_joint_L_5,
        'leg_joint_R_5': leg_joint_R_5,
    }

    return tracked_pose

# multiply animation matrices from root to joint
def local_from_parents(joint, animation_transforms):
    local_animation_transform = animation_transforms[joint.name]
    if (joint.parent == -1):
        return local_animation_transform
    else:
        parent_transform = local_from_parents(joints_dict[nodes[joint.parent].name], animation_transforms)
        global_animation_transform = pyrr.matrix44.multiply(parent_transform, local_animation_transform)
        return global_animation_transform

# get joint transforms from animation data
def get_keyframe_animation(keyframe):
    channels = animations[0].channels
    samplers = animations[0].samplers
    keyframe_animations = {}
    for i in range(0, len(channels), 3):
        node = nodes[channels[i].target.node]
        translationSampler = samplers[channels[i].sampler]
        # translationTimes = loadBufferData(translationSampler.input)
        translationAnimation = loadBufferData(translationSampler.output)
        offset = keyframe*3
        translation = translationAnimation[offset:offset+3]
        rotationSampler = samplers[channels[i + 1].sampler]
        # rotationTimes = loadBufferData(rotationSampler.input)
        rotationAnimation = loadBufferData(rotationSampler.output)
        offset = keyframe*4
        rotation = rotationAnimation[offset:offset+4]
        scaleSampler = samplers[channels[i + 2].sampler]
        # scaleTimes = loadBufferData(scaleSampler.input)
        scaleAnimation = loadBufferData(scaleSampler.output)
        offset = keyframe*3
        scale = scaleAnimation[offset:offset+3]
        # keyframe_animations[node.name].translation = translation
        # keyframe_animations[node.name].rotation = rotation
        # keyframe_animations[node.name].scale = scale
        if not any(translation) or not any(rotation) or not any(scale):
            continue
        trans_matrix = pyrr.matrix44.multiply(pyrr.matrix44.create_from_translation(translation), pyrr.matrix44.create_from_quaternion(rotation))
        keyframe_animations[node.name] = pyrr.matrix44.multiply(trans_matrix, pyrr.matrix44.create_from_scale(scale))
    return keyframe_animations

def get_keypoint_animation_matrices(keypoints):
    kpts_dict = calculate_joint_angles.convert_to_dictionary_single_frame(keypoints)
    calculate_joint_angles.add_hips_and_neck(kpts_dict)
    # get local quaternion rotations
    tracked_pose = calc_joints(kpts_dict)

    # get local animation matrices
    animation_matrices = {}
    for joint, quat in tracked_pose.items():
        animation_matrices[joint] = pyrr.matrix44.create_from_quaternion(quat)

    return animation_matrices


def set_parents(node_index):
    node = nodes[node_index]
    for child_index in node.children:
        child_node = nodes[child_index]
        joints_dict[child_node.name].parent = node_index
        set_parents(child_index)

def update_local_transforms(new_transforms):
    for joint_name, joint in joints_dict.items():
        joints_dict[joint_name].local_transform = new_transforms[joint_name]

# Initialize pygame
pg.init()

# Set up OpenGL context version
pg.display.gl_set_attribute(pg.GL_CONTEXT_MAJOR_VERSION, 3)
pg.display.gl_set_attribute(pg.GL_CONTEXT_MINOR_VERSION, 3)

# Create a window for graphics using OpenGL
width = 640
height = 480
pg.display.set_mode((width, height), pg.OPENGL | pg.DOUBLEBUF)

glClearColor(0.3, 0.4, 0.5, 1.0)
glEnable(GL_DEPTH_TEST)

# Write shaders (vertex and fragment shaders) and compile them here
shader = shaderLoader.compile_shader('shaders/vert.glsl', 'shaders/frag.glsl')
glUseProgram(shader)

# Read the 3D model
# Lets setup our scene geometry.

gltf = GLTF2.load('../RiggedFigureInBlender.gltf')

accessors = gltf.__getattribute__('accessors')
animations = gltf.__getattribute__('animations')
asset = gltf.__getattribute__('asset')
buffers = gltf.__getattribute__('buffers')
bufferViews = gltf.__getattribute__('bufferViews')
cameras = gltf.__getattribute__('cameras')
materials = gltf.__getattribute__('materials')
meshes = gltf.__getattribute__('meshes')
nodes = gltf.__getattribute__('nodes')
samplers = gltf.__getattribute__('samplers')
scene = gltf.__getattribute__('scene')
scenes = gltf.__getattribute__('scenes')
skins = gltf.__getattribute__('skins')
hierarchy = skins[0].joints
textures = gltf.__getattribute__('textures')
extensionsRequired = gltf.__getattribute__('extensionsRequired')
extensionsUsed = gltf.__getattribute__('extensionsUsed')

# List bone hierarchy
traverse_node_tree(nodes[0], 0)

# Get inverse bind matrices
inverseBindMatrices = loadBufferData(skins[0].inverseBindMatrices)
num_matrices = len(inverseBindMatrices) // 16
inverseBindMatrices = inverseBindMatrices.reshape((num_matrices, 4, 4))

# Create joints in bind pose
joints_dict = {}
for i, node_index in enumerate(hierarchy):
    inverse_bind_matrix = inverseBindMatrices[i]
    node = nodes[node_index]
    node_name = node.name
    if (node.scale is None):
        node.scale = [1,1,1]
    joints_dict[node_name] = Joint(
        node_name,
        inverse_bind_matrix,
        node.children,
        node.rotation,
        node.scale,
        node.translation
    )

set_parents(hierarchy[0])

joints_dict['torso_joint_1'].print_hierarchy()

# Read in mediapipe poses
kpts = read_keypoints('keypoints_data/kpts_3d.dat')

center = np.array([0,1,0])
dia = 1
scale = 2/dia
aspect = float(width/height)

trans_matrix = pyrr.matrix44.create_from_translation(-center)
scale_matrix = pyrr.matrix44.create_from_scale([1, 1, 1])
model_matrix = pyrr.matrix44.multiply(trans_matrix, scale_matrix)

eye = (0,1,2)
trans_matrix = np.array((
    (1, 0, 0, 0),
    (0, 1, 0, 0),
    (0, 0, 1, 0),
    (0, 0, 0, 1)
))
target = (0,0,0)
up = np.array([0,1,0])
fov = 55
near = 0.1
far = 100
camera_rot_speed = 50

view_matrix = pyrr.matrix44.create_look_at(eye, target, up)
proj_matrix = pyrr.matrix44.create_perspective_projection_matrix(fov, aspect, near, far)

# Upload the model data to the GPU. Create a VAO and VBO for the model data.

# Create VAO and VBO
vao = glGenVertexArrays(1)
glBindVertexArray(vao)

# Configure uniform variables.
model_matrix_loc = glGetUniformLocation(shader, 'model_matrix')
view_matrix_loc = glGetUniformLocation(shader, 'view_matrix')
proj_matrix_loc = glGetUniformLocation(shader, 'proj_matrix')
joint_matrices_loc = glGetUniformLocation(shader, 'joint_matrices')

gui = SimpleGUI("Transform Camera")

# Camera
sliderCameraY = gui.add_slider("Rotate Camera's Y Axis", -math.pi, math.pi, 0)
sliderCameraX = gui.add_slider("Rotate Camera's X Axis", -math.pi/2, math.pi/2, 0)
sliderCameraFOV = gui.add_slider("Field of View", 0, 180, fov)

# Animate or not
render_type_radio = gui.add_radio_buttons(label_text="Figure",
    options_dict={"Static": 0,"Animated with OpenCV data": 1, "Animated with GLTF data": 2},
    initial_option="Static")

# Run a loop to keep the program running
draw = True
frame = 15
start = time.time()
fps = 20

number_of_frames = 30

while draw:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            draw = False

    now = time.time()
    spf = 1/fps
    if ((now - start) > spf):
        start = time.time()
        frame += 1
        # print(frame)
        if (frame >= number_of_frames):
            frame = 0

    # Clear color buffer and depth buffer before drawing each frame
    glUseProgram(shader)
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)

    # Create rotation matrix
    rotationY_mat = pyrr.matrix44.create_from_y_rotation(sliderCameraY.get_value())
    rotationX_mat = pyrr.matrix44.create_from_x_rotation(sliderCameraX.get_value())
    rot_mat = pyrr.matrix44.multiply(rotationX_mat, rotationY_mat)

    # Apply rotation to eye
    rotated_eye = pyrr.matrix44.apply_to_vector(rot_mat, eye)

    # Create view matrix
    view_matrix = pyrr.matrix44.create_look_at(rotated_eye, target, up)

    # Create projection matrix
    proj_matrix = pyrr.matrix44.create_perspective_projection_matrix(sliderCameraFOV.get_value(), aspect, near, far)

    # Get animation transforms
    global_transforms = {}
    animation_data = {}

    if int(render_type_radio.get_value()) == 1:
        # Get keypoint animations from mediapipe keypoints
        number_of_frames = len(kpts)
        animation_data = get_keypoint_animation_matrices(kpts[frame])
        # animation_data['torso_joint_1'] = pyrr.matrix44.multiply(animation_data['torso_joint_1'], pyrr.matrix44.create_from_axis_rotation(np.array([1, 0, 0]), math.pi/2))
    elif int(render_type_radio.get_value()) == 2:
        # Get keyframe animations from gltf file
        number_of_frames = len(animations[0].channels) / 3
        animation_data = get_keyframe_animation(frame)
        # animation_data['torso_joint_1'] = pyrr.matrix44.multiply(animation_data['torso_joint_1'], pyrr.matrix44.create_from_axis_rotation(np.array([1, 0, 0]), math.pi/2))
    else:
        # no animation, use bind pose transforms
        for joint_name, joint in joints_dict.items():
            animation_data[joint_name] = pyrr.matrix44.create_identity()

    # get the global transformation matrices to send to shader
    for joint_name, joint in joints_dict.items():
        global_transforms[joint_name] = local_from_parents(joint, animation_data)

    # Order the joint matrices
    joint_matrices_in_node_order = []
    for node in nodes:
        if ("_joint_" in node.name):
            joint_matrices_in_node_order.append(global_transforms[node.name])

    joint_matrices_in_node_order = np.array(joint_matrices_in_node_order).ravel()

    glUniformMatrix4fv(model_matrix_loc, 1, GL_FALSE, model_matrix)
    glUniformMatrix4fv(view_matrix_loc, 1, GL_FALSE, view_matrix)
    glUniformMatrix4fv(proj_matrix_loc, 1, GL_FALSE, proj_matrix)
    glUniformMatrix4fv(joint_matrices_loc, MAX_JOINTS, GL_FALSE, joint_matrices_in_node_order)

    # For every attribute in every primitive, send the buffer data to the GPU

    mesh = gltf.meshes[0]
    drawCount = 0
    for primitive in mesh.primitives:
        for attribName, accessorIndex in primitive.attributes.__dict__.items():
            if accessorIndex is not None:
                glBindVertexArray(vao)
                # Do something with the attribute name and accessor index
                accessor = gltf.accessors[accessorIndex]
                attribLocation = glGetAttribLocation(shader, attribName)
                bufferViewIndex = accessor.bufferView
                if bufferViewIndex is not None:
                    bufferView = gltf.bufferViews[bufferViewIndex]
                    drawCount = accessor.count

                    buffer  = glGenBuffers(1)
                    glBindBuffer(GL_ARRAY_BUFFER, buffer)
                    bufferData = loadBufferData(accessorIndex)
                    glBufferData(GL_ARRAY_BUFFER, bufferData, GL_STATIC_DRAW)

                    # if attribute is not defined in vertex shader continue
                    if (attribLocation == -1):
                        continue
                    glEnableVertexAttribArray(attribLocation)
                    componentType = get_numpy_dtype(accessor.componentType)
                    if (is_integer_dtype(componentType)):
                        glVertexAttribIPointer(
                            attribLocation, numberOfComponentsForType(accessor.type), accessor.componentType, bufferView.byteStride or 0, ctypes.c_void_p((accessor.byteOffset))
                        )
                    else:
                        glVertexAttribPointer(
                            attribLocation, numberOfComponentsForType(accessor.type), accessor.componentType,
                            accessor.normalized, bufferView.byteStride or 0, ctypes.c_void_p((accessor.byteOffset))
                        )
                    glDrawArrays(primitive.mode, 0, drawCount)
                    glBindBuffer(GL_ARRAY_BUFFER, 0)
                    glBindVertexArray(0)

                    err = glGetError()
                    if (err):
                        print(err)

    # indices = np.array(range(drawCount), dtype=np.uint32)
    # indices_accessor = accessors[meshes[0].primitives[0].indices]
    # indices = loadBufferData(meshes[0].primitives[0].indices)
    # glDrawElements(meshes[0].primitives[0].mode, indices_accessor.count, indices_accessor.componentType, 0)

    # Refresh the display to show what's been drawn
    pg.display.flip()


# Cleanup
glDeleteVertexArrays(1, [vao])
# glDeleteBuffers(1, [vbo])
glDeleteProgram(shader)

pg.quit()   # Close the graphics window
quit()      # Exit the program