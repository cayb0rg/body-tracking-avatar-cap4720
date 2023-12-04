## PyOpenGL Avatar (`avatar_opengl`)

This was my first attempt at creating an avatar that follows your movement in real time using PyOpenGL. It parses a GLTF file that contains the positions, normals, joint indices, and joint weights of a model into the GPU. I failed to load the model correctly; half of the triangles were missing, which could be due to a culling/winding order problem or even an indexing problem. Whatever it was, I couldn't nail down the issue. The joint indices and joint weights loaded in fine, however, so I went ahead anyways and tried to animate it using skeletal animation techniques, so there is an option to animate it using keyframe animations stored in the GLTF file, or using keypoint data from body tracking (see further down).

To start, run the commands:
`cd avatar_opengl`
`python main.py`

If your program crashes when switching to "Animate using OpenCV" or "GLTF" data, restart the program. It is a bit finnicky when switching modes.

## Body tracking (Python) (`bodytracking`)
I used TemugeB's camera calibration and 3D pose estimation code to generate keypoints for the PyOpenGL implementation, which didn't end up working, but here it is anyways.

I converted the skeleton drawing code to PyOpenGL:
`cd bodytracking`
`python draw_skeleton.py`

This is using pre-recorded data stored in `keypoints_data/kpts_3d.dat`. To generate your own keypoints, follow the stereo camera calibration tutorial at https://github.com/TemugeB/python_stereo_camera_calibrate and the body pose tutorial at https://github.com/TemugeB/bodypose3d. Note that you must have two cameras for it to work.

## Body tracking (WebGL) (Root folder)
As a last attempt at getting something working, I switched to WebGL. This uses mediapipe's pose landmarker for getting the body tracking data and Three.js for rendering the model.

To test it:

1. Set up a webcam.
2. In the root folder, run `npx vite`.
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


