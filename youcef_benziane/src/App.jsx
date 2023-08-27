import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from "three/examples/jsm/libs/stats.module.js"
function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 96;

    const canvas = document.getElementById("three_js_canvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth,  window.innerHeight
      );
   
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xaaaaaa);
    scene.add(directionalLight);

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);
    const controls = new OrbitControls( camera, renderer.domElement );
const stats =Stats();
    const animate = () => {
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
     
            renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
      controls.update();
      stats.update();
    };

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);
console.log("rrr")
    animate();
  }, []);

  return (
   
    
    <div className="relative">
    <canvas  id="three_js_canvas"></canvas>
      <div className=" mt-40 absolute inset-0 flex justify-center items-center h-screen ">
      <h1 className="mt-40 text-white text-6xl">Loading ...</h1>
    </div>
    </div>
    
  );
}

export default App;
