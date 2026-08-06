import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xccff00, 2.5);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00d2ff, 1.5);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // Materials
    const limeMaterial = new THREE.MeshStandardMaterial({
      color: 0xccff00,
      roughness: 0.2,
      metalness: 0.5,
    });

    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.1,
      metalness: 0.8,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    // Meshes Group
    const group = new THREE.Group();

    // 1. Torus Ring (Lime)
    const torusGeo = new THREE.TorusGeometry(2.2, 0.6, 16, 100);
    const torusMesh = new THREE.Mesh(torusGeo, limeMaterial);
    torusMesh.position.set(6, 2, -2);
    group.add(torusMesh);

    // 2. Icosahedron (Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(2.5, 1);
    const icoMesh = new THREE.Mesh(icoGeo, wireframeMaterial);
    icoMesh.position.set(-6, -1, -3);
    group.add(icoMesh);

    // 3. Rounded Cube (Dark Metallic)
    const cubeGeo = new THREE.BoxGeometry(2, 2, 2);
    const cubeMesh = new THREE.Mesh(cubeGeo, darkMaterial);
    cubeMesh.position.set(5, -3, 1);
    cubeMesh.rotation.set(0.5, 0.5, 0);
    group.add(cubeMesh);

    // 4. Floating Octahedron (Lime)
    const octGeo = new THREE.OctahedronGeometry(1.5);
    const octMesh = new THREE.Mesh(octGeo, limeMaterial);
    octMesh.position.set(-5, 3, 0);
    group.add(octMesh);

    scene.add(group);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotations
      torusMesh.rotation.x = elapsedTime * 0.4;
      torusMesh.rotation.y = elapsedTime * 0.6;

      icoMesh.rotation.x = elapsedTime * 0.2;
      icoMesh.rotation.y = elapsedTime * 0.3;

      cubeMesh.rotation.x = elapsedTime * 0.5;
      cubeMesh.rotation.y = elapsedTime * 0.2;

      octMesh.rotation.x = elapsedTime * 0.6;
      octMesh.rotation.z = elapsedTime * 0.4;

      // Gentle floating Y offsets
      torusMesh.position.y = 2 + Math.sin(elapsedTime * 1.5) * 0.4;
      octMesh.position.y = 3 + Math.sin(elapsedTime * 1.2 + 1) * 0.3;
      cubeMesh.position.y = -3 + Math.sin(elapsedTime * 1.8 + 2) * 0.3;
      icoMesh.position.y = -1 + Math.sin(elapsedTime * 1.0 + 3) * 0.4;

      // Group rotation based on mouse
      group.rotation.y += (mouseX * 0.3 - group.rotation.y) * 0.05;
      group.rotation.x += (-mouseY * 0.3 - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
