'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CharacterCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Escena, Cámara y Renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x7c3aed, 3, 50); // Luz violeta brillante
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x000000, 2, 50);
    backLight.position.set(-5, -5, -2);
    scene.add(backLight);

    // 3. Construcción del Muñeco 3D (Estilo Robot / Estilizado)
    const characterGroup = new THREE.Group();

    // Materiales (Violeta y Negro)
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x0f0e17, roughness: 0.3, metalness: 0.8 });
    const violetMat = new THREE.MeshStandardMaterial({ color: 0x7c3aed, roughness: 0.2, metalness: 0.5 });
    const glowingVioletMat = new THREE.MeshBasicMaterial({ color: 0xa78bfa });

    // Cabeza
    const headGeo = new THREE.BoxGeometry(1, 1, 1);
    const head = new THREE.Mesh(headGeo, blackMat);
    head.position.y = 1.4;
    characterGroup.add(head);

    // Visor / Ojos (Glow Violeta)
    const visorGeo = new THREE.BoxGeometry(0.8, 0.2, 0.2);
    const visor = new THREE.Mesh(visorGeo, glowingVioletMat);
    visor.position.set(0, 1.4, 0.51);
    characterGroup.add(visor);

    // Torso
    const torsoGeo = new THREE.BoxGeometry(1.4, 1.8, 0.8);
    const torso = new THREE.Mesh(torsoGeo, violetMat);
    torso.position.y = 0;
    characterGroup.add(torso);

    // Brazos
    const armGeo = new THREE.BoxGeometry(0.4, 1.4, 0.4);
    
    const leftArm = new THREE.Mesh(armGeo, blackMat);
    leftArm.position.set(1.0, 0, 0);
    characterGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, blackMat);
    rightArm.position.set(-1.0, 0, 0);
    characterGroup.add(rightArm);

    // Piernas
    const legGeo = new THREE.BoxGeometry(0.5, 1.5, 0.5);
    
    const leftLeg = new THREE.Mesh(legGeo, blackMat);
    leftLeg.position.set(0.4, -1.65, 0);
    characterGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, blackMat);
    rightLeg.position.set(-0.4, -1.65, 0);
    characterGroup.add(rightLeg);

    scene.add(characterGroup);

    // 4. Interactividad con el mouse (Rotación manual)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      characterGroup.rotation.y += deltaX * 0.01;
      characterGroup.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // 5. Animación de flotación (Loop)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Si no se está arrastrando, rotación s automática y flotación suave
      if (!isDragging) {
        characterGroup.rotation.y += 0.005;
      }
      characterGroup.position.y = Math.sin(elapsedTime * 2) * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    // 6. Responsive Resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}