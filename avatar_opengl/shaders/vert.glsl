#version 420 core

const int MAX_JOINTS = 19;//max joints allowed in a skeleton

layout (location = 0) in vec3 POSITION;
layout (location = 1) in vec3 NORMAL;
layout (location = 2) in vec4 WEIGHTS_0; // holds the weights for each of the joints that affect this vertex
layout (location = 3) in ivec4 JOINTS_0; // holds the indices for the joint matrices for each joint that affects this vertex

out vec3 fragNormal;

uniform mat4 view_matrix;
uniform mat4 proj_matrix;
uniform mat4 model_matrix;

uniform mat4 joint_matrices[MAX_JOINTS]; // joint matrices for each weight in weights

void main()
{
    vec4 position = vec4(POSITION, 1.0);
    vec4 normal = vec4(NORMAL, 0.0);

    mat4 skinMatrix =
        WEIGHTS_0.x * joint_matrices[int(JOINTS_0.x)] +
        WEIGHTS_0.y * joint_matrices[int(JOINTS_0.y)] +
        WEIGHTS_0.z * joint_matrices[int(JOINTS_0.z)] +
        WEIGHTS_0.w * joint_matrices[int(JOINTS_0.w)];

    gl_Position = proj_matrix * view_matrix * model_matrix * skinMatrix * position;
    mat4 normal_matrix = transpose(inverse(model_matrix));
    vec3 new_normal = (normal_matrix*normal).xyz;
    fragNormal = normalize(new_normal);
}