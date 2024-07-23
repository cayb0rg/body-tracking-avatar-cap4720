# Project Overview

The project involves creating a 3D avatar that tracks human movement in real-time using a webcam. The implementation is done using various technologies and approaches.

Video Demo: https://youtu.be/IUkTBV7e9I4

## PyOpenGL Implementation

### Overview
Most of my efforts went towards creating an avatar that follows your movement in real time using PyOpenGL and skeletal animation techniques. This attempt failed, sadly. I first tried to use a Collada (.dae) file since these files can hold joint indices and weight data; however, I struggled to render the model correctly and realized that it was because my Collada file was still using polygons even though I exported it with triangulation enabled. I tried to use other Collada files, but because each Collada is structured differently, I decided to switch to GLTF, a more universal JSON-like format.

However, this didn't work out either. Half of the triangles were missing, which could be due to the triangles' winding order or because the GLTF is indexed. However, my attempt to solve the culling problem using `glDisable(GL_CULL_FACE)` or other solutions did not work. I also tried my hand at indexing the buffer with `GL_ELEMENT_ARRAY_BUFFER`, but this did not work either.

### Imported Libraries
- **pygame:** For window creation and event handling.
- **PyOpenGL:** Provides OpenGL bindings for 3D graphics rendering.
- **numpy:** Used for numerical operations on arrays.
- **pygltflib:** Enables loading and parsing GLTF files.
- Custom modules for shader loading and GUI.

### Functions
- `read_keypoints(filename)`: Reads 3D keypoints from a file.
- Various utility functions for handling data types, component types, and accessor types.
- `loadBufferData(accessor_index)`: Loads buffer data based on accessor index from the GLTF file.
- `traverse_node_tree(root, tab)`: Recursively traverses the node hierarchy in the GLTF file and prints it.
- `vector_rotation(vector1, vector2)`: Calculates quaternion rotation between two vectors.
- `calc_joints(keypoints)`: Calculates joint angles from 3D keypoints.
- `local_from_parents(joint, animation_transforms)`: Calculates local transformations from the chain of parent animations.
- `get_keyframe_animation(keyframe)`: Retrieves keyframe animations from the GLTF file.
- `get_keypoint_animation_matrices(keypoints)`: Converts keypoint data to animation matrices.

### Rendering Steps
1. Parse GLTF data to create a joint hierarchy, including inverse bind matrices.
2. In the main draw function:
    - Update camera and model matrices based on user input.
    - Send joint transformation data to the vertex shader.
    - Send buffer data to the GPU for each attribute in the mesh's primitive.
    - Use `glDrawArrays` to draw each primitive based on the attributes' draw count.

### Vertex Shader
- Attributes for joint indices and joint weights are added. The joint indices point to which joint matrix affects this vertex, and the joint weights indicate just how much those joint matrix affect the vertex.
- An additional uniform is introduced for sending joint matrices or global transformations after animations are applied.

### Instructions
To run the program:
```
cd avatar_opengl
python main.py
```
If your program crashes when switching to "Animate using OpenCV" or "GLTF" data, restart the program. It is a bit finnicky when switching modes.

## Body tracking (Python)
I used TemugeB's camera calibration and 3D pose estimation code to generate keypoints for the PyOpenGL implementation, which didn't end up working, but here it is anyways.

I converted the skeleton drawing code to PyOpenGL:
`cd bodytracking`
`python draw_skeleton.py`

This is using pre-recorded data stored in `keypoints_data/kpts_3d.dat`. To generate your own keypoints, follow the stereo camera calibration tutorial at https://github.com/TemugeB/python_stereo_camera_calibrate and the body pose tutorial at https://github.com/TemugeB/bodypose3d. Note that you must have two cameras for it to work.

## Body tracking (WebGL)
As a last attempt at getting something working, I switched to WebGL. This uses mediapipe's pose landmarker for getting the body tracking data and Three.js for rendering the model. I used the add-ons GLTFLoader for loading GLTF models and OrbitControls for moving around the scene.

To test it:

1. Set up a webcam.
2. In the root folder, run `npm install` and `npx vite`.
3. Go to `localhost:5173` in your browser.

## Credits
GLTF Model from the Khronos Group: https://github.com/KhronosGroup/glTF-Sample-Models/blob/master/2.0/RiggedFigure/glTF/RiggedFigure.gltf

Python Camera calibration/3D Pose Estimation from TemugeB: https://github.com/TemugeB/bodypose3d

JavaScript mediapipe pose landmarker: https://developers.google.com/mediapipe/solutions/vision/pose_landmarker/web_js

### References
- KhronosGroup GLTF tutorials: https://github.com/KhronosGroup/glTF-Tutorials/blob/master/gltfTutorial/README.md
- Euclidean Space for standardized math equations: https://www.euclideanspace.com/maths/geometry/index.htm
- ThinMatrix's OpenGL Tutorials: https://www.youtube.com/playlist?list=PLRIWtICgwaX2tKWCxdeB7Wv_rTET9JtWW
- Lisyarus Blog: https://lisyarus.github.io/blog/graphics/2023/07/03/gltf-animation.html
- GLTF 2.0 API Reference Guide: https://www.khronos.org/files/gltf20-reference-guide.pdf
- Maya Character Modeling Tutorial: https://www.youtube.com/watch?v=UQvh9-AAaAE


