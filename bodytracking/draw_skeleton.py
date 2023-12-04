# Import necessary libraries
import pygame as pg
from pygame.locals import *
from OpenGL.GL import *
from OpenGL.GLU import *
import numpy as np
import math

import calculate_joint_angles
import utils

def draw_skeleton_from_joint_angles(kpts):
    all_vertices = []
    all_edges = []

    for framenum in range(kpts['hips'].shape[0]):
        vertices = []
        edges = []
        #get a dictionary containing the rotations for the current frame
        frame_rotations = {}
        for joint in kpts['joints']:
            frame_rotations[joint] = kpts[joint+'_angles'][framenum]

        #for plotting
        for _j in kpts['joints']:
            if _j == 'hips': continue

            #get hierarchy of how the joint connects back to root joint
            hierarchy = kpts['hierarchy'][_j]

            #get the current position of the parent joint
            r1 = kpts['hips'][framenum]/kpts['normalization']
            for parent in hierarchy:
                if parent == 'hips': continue
                R = calculate_joint_angles.get_rotation_chain(parent, kpts['hierarchy'][parent], frame_rotations)
                r1 = r1 + R @ kpts['base_skeleton'][parent]

            #get the current position of the joint. Note: r2 is the final position of the joint. r1 is simply calculated for plotting.
            R = calculate_joint_angles.get_rotation_chain(hierarchy[0], hierarchy, frame_rotations)
            r2 = r1 + R @ kpts['base_skeleton'][_j]
            vertices.append((r1[0], r1[1], r1[2]))
            vertices.append((r2[0], r2[1], r2[2]))
            edges.append((len(vertices) - 2, len(vertices) - 1))
        all_vertices.append(vertices)
        all_edges.append(edges)
    return all_vertices, all_edges

# Initialize pygame
pg.init()
display = (1280, 720)
pg.display.set_mode(display, DOUBLEBUF|OPENGL)

gluPerspective(45, (display[0] / display[1]), 0.1, 50.0)

glTranslatef(0.0,0.0, -5)

glRotatef(25, 2, 1, 0)

# Read in keypoints
kpts = calculate_joint_angles.read_keypoints('keypoints_data/kpts_3d.dat')
R = utils.get_R_z(np.pi/2)
for framenum in range(kpts.shape[0]):
    for kpt_num in range(kpts.shape[1]):
        kpts[framenum,kpt_num] = R @ kpts[framenum,kpt_num]
R = utils.get_R_y(np.pi)
for framenum in range(kpts.shape[0]):
    for kpt_num in range(kpts.shape[1]):
        kpts[framenum,kpt_num] = R @ kpts[framenum,kpt_num]

kpts = calculate_joint_angles.convert_to_dictionary(kpts)
calculate_joint_angles.add_hips_and_neck(kpts)
filtered_kpts = calculate_joint_angles.median_filter(kpts)
calculate_joint_angles.get_bone_lengths(filtered_kpts)
calculate_joint_angles.get_base_skeleton(filtered_kpts)
calculate_joint_angles.calculate_joint_angles(filtered_kpts)

# new_dict = {}
# for k, v in filtered_kpts.items():
#     new_array = []
#     name = k.split("_")
#     if (len(name) > 1 and name[1] == 'matrix'):
#         # print(k)
#         # print(v)
#         for i in v:
#             second_array = []
#             for j in i:
#                 # third_array = []
#                 # for k in j:
#                 #     third_array.append(k)
#                 second_array.append(j)
#             new_array.append(second_array)
#         new_dict[name[0]] = new_array
# # print(new_dict)
# json_object = json.dumps(new_dict, indent=4)

# with open("keypoint_matrices.json", "w") as outfile:
#     outfile.write(json_object)

# print("JOINT ANGLES ==================")
# new_dict = {}
# for k, v in filtered_kpts.items():
#     new_array = []
#     name = k.split("_")
#     if (len(name) > 1 and name[1] == 'angles'):
#         print(k)
#         print(v)
#         for i in v:
#             second_array = []
#             for j in i:
#                 second_array.append(j)
#             new_array.append(second_array)
#         new_dict[name[0]] = new_array
# json_object = json.dumps(new_dict, indent=4)

# with open("keypoint_angles.json", "w") as outfile:
#     outfile.write(json_object)

# new_dict = {}
# for i, v in filtered_kpts['positions'].items():
#     first_array = []
#     for k in v:
#         second_array = []
#         for j in k:
#             second_array.append(j)
#         first_array.append(second_array)
#     new_dict[i] = first_array
# json_object = json.dumps(new_dict, indent=4)

# with open("keypoint_positions.json", "w") as outfile:
#     outfile.write(json_object)

vertices, edges = draw_skeleton_from_joint_angles(filtered_kpts)

last = pg.time.get_ticks()
cooldown = 100
# Run a loop to keep the program running
draw = True
while draw:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            draw = False

    for i in range(len(vertices)):
        now = pg.time.get_ticks()
        while now - last < cooldown:
            now = pg.time.get_ticks()

        if (now - last >= cooldown):
            last = now
            frame_vertices = tuple(vertices[i])
            frame_edges = tuple(edges[i])

            # print(i)
            # Clear color buffer and depth buffer before drawing each frame
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)

            glBegin(GL_LINES)
            for edge in frame_edges:
                if (all(edge)):
                    for vertex in edge:
                        if vertex:
                            if (vertex >= len(frame_vertices)):
                                draw = False
                                break
                            point = frame_vertices[vertex]
                            if (not all(point)):
                                continue
                            mag = math.sqrt(point[0]**2 + point[1]**2 + point[2]**2)
                            unit_p = tuple(coord/mag for coord in point)
                            glVertex3fv(unit_p)
            glEnd()

        # Refresh the display to show what's been drawn
        pg.display.flip()

pg.quit()   # Close the graphics window
quit()      # Exit the program