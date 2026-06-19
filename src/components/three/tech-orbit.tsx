"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const techCount = 14;
const brainAspectRatio = 1391 / 1131;

export function TechOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const orbitGroup = new THREE.Group();
    let frame = 0;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    scene.add(orbitGroup);

    const texture = new THREE.TextureLoader().load("/brain-premium.png");
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const brainMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      alphaTest: 0.5,
      depthTest: true,
      depthWrite: true,
      side: THREE.DoubleSide,
    });

    const brainHeight = 2.85;
    const brain = new THREE.Mesh(new THREE.PlaneGeometry(brainHeight * brainAspectRatio, brainHeight), brainMaterial);
    brain.position.set(0, -0.1, 0);
    scene.add(brain);

    const orbitMaterials = [
      new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.32, depthTest: true }),
      new THREE.LineBasicMaterial({ color: 0x9cf0ff, transparent: true, opacity: 0.18, depthTest: true }),
    ];

    const orbitLines = [
      { radius: 2.58, rotation: [1.18, 0.34, -0.2] },
      { radius: 3.38, rotation: [1.42, -0.22, 0.36] },
    ].map(({ radius, rotation }, index) => {
      const line = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.TorusGeometry(radius, 0.003, 8, 220)),
        orbitMaterials[index === 0 ? 0 : 1],
      );
      line.rotation.set(rotation[0], rotation[1], rotation[2]);
      orbitGroup.add(line);
      return line;
    });

    const markerMaterial = new THREE.MeshPhongMaterial({
      color: 0x9cf0ff,
      emissive: 0x00daf3,
      emissiveIntensity: 0.72,
      transparent: true,
      opacity: 0.9,
      shininess: 120,
      depthTest: true,
      depthWrite: false,
    });

    const orbiters = Array.from({ length: techCount }, (_, index) => {
      const pivot = new THREE.Object3D();
      const size = index % 5 === 0 ? 0.105 : 0.07;
      const marker = new THREE.Mesh(new THREE.SphereGeometry(size, 16, 16), markerMaterial);
      marker.position.x = 2.68 + (index % 3) * 0.22;
      pivot.rotation.y = (index / techCount) * Math.PI * 2;
      pivot.rotation.z = index % 2 === 0 ? 0.26 : -0.2;
      pivot.add(marker);
      orbitGroup.add(pivot);
      return { marker, pivot, speed: 0.0024 + index * 0.00032 };
    });

    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const light = new THREE.PointLight(0x00e5ff, 3, 20);
    light.position.set(5, 4, 5);
    scene.add(light);
    camera.position.z = 7;

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      if (isVisible) {
        orbitGroup.rotation.y += 0.002;
        orbitLines.forEach((line, index) => {
          line.rotation.z += 0.00038 + index * 0.00012;
        });
        orbiters.forEach(({ marker, pivot, speed }) => {
          pivot.rotation.y += speed;
          marker.scale.setScalar(1 + Math.sin(performance.now() * 0.0015 + speed * 1000) * 0.18);
        });
        renderer.render(scene, camera);
      }
      frame = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      texture.dispose();
      brain.geometry.dispose();
      brainMaterial.dispose();
      orbitLines.forEach((line) => line.geometry.dispose());
      orbitMaterials.forEach((material) => material.dispose());
      orbiters.forEach(({ marker }) => marker.geometry.dispose());
      markerMaterial.dispose();
      container.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} aria-label="Ecosystem core brain orbit" role="img" style={{ width: "100%", height: "100%" }} />;
}
