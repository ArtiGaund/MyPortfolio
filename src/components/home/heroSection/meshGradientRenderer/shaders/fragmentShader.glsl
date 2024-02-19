export default `

uniform vec2 u_resolution;
uniform float u_time;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vColor;

float PI = 3.14159265359;

void main(){
    
    gl_FragColor = vec4(vUv, 0.0, 1.0);
    gl_FragColor = vec4(vColor, 1.0);

}`