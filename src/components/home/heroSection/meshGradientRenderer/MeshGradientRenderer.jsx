import React, { useRef, useState } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from "./shaders/vertexShader.glsl"
import fragmentShader from "./shaders/fragmentShader.glsl";
import colors from "nice-color-palettes";
import * as THREE from "three";
import { PerspectiveCamera } from '@react-three/drei';

extend({ OrbitControls });

const MeshGradient = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * colors.length));
//  dark 95, 43 (5), 5, 96 82 94
//light 4
  const pallete = colors[index].map(color => new THREE.Color(color));
  console.log(index);

  const meshRef = useRef();
  const { scene, camera, gl } = useThree();

  useFrame(({ clock }) => {
    // uniforms.u_time.value += 0.0002;
    
    meshRef.current.material.uniforms.u_time.value += 0.001;

    gl.render(scene, camera);
  });
    return (
        <mesh ref={meshRef}>
      <planeGeometry args={[1.5, 1.5, 100, 100]} />
      <shaderMaterial 
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          // pass uniforms
          u_time: { 
            type: 'f',
            value: 0.0
        },
        u_resolution: {
             type: 'v2',
             value: new THREE.Vector2(window.innerWidth, window.innerHeight)
             .multiplyScalar(window.devicePixelRatio)
        },
        u_mouse: {
            type: 'v2',
            value: new THREE.Vector2(0.0, 0.0)
        },
        u_position: {
            type: 'v3',
            value: new THREE.Vector3(0.0, 0.0, 0.0)
        },
        uColor: { 
            type: 'v3',
            value: pallete
         }
        }}
      />
    </mesh>
    )
}

const MeshGradientRenderer = () => {
    return (
        <Canvas style={{ height: '100vh', width: '100vw', zIndex: -10}}>
        <PerspectiveCamera 
        makeDefault
        manual
        fov={45}
        position={new THREE.Vector3(0, 0, 0.2)}
        near={0.1}
        far={1000}
        />
        <MeshGradient />
    </Canvas>
    );
};



export default MeshGradientRenderer;