"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const group = new THREE.Group();
    let frame = 0;
    const startedAt = performance.now();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    scene.add(group);

    // Mouse interactive parallax variables
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      targetRotationY = x * 0.28;
      targetRotationX = y * 0.28;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Core Material with pulsating emissive color
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x007f91,
      emissive: 0x003c46,
      emissiveIntensity: 0.32,
      transparent: true,
      opacity: 0.28,
      shininess: 70,
    });

    const core = new THREE.Mesh(new THREE.SphereGeometry(1.9, 64, 64), coreMaterial);
    group.add(core);

    // Shell Material updated to MeshPhongMaterial to catch light specularity
    const shellMaterial = new THREE.MeshPhongMaterial({
      color: 0x00e5ff,
      emissive: 0x002c33,
      emissiveIntensity: 0.28,
      shininess: 90,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const shell = new THREE.Mesh(new THREE.SphereGeometry(1.92, 72, 72), shellMaterial);
    group.add(shell);

    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0x2979ff,
      transparent: true,
      opacity: 0.44,
      side: THREE.DoubleSide,
    });

    const orbitConfigs = [
      { radius: 2.82, tube: 0.006, rotation: [Math.PI / 2, 0.02, 0.01] },
      { radius: 3.05, tube: 0.008, rotation: [1.08, 0.64, -0.42] },
      { radius: 3.18, tube: 0.007, rotation: [1.34, -0.82, 0.36] },
      { radius: 2.72, tube: 0.005, rotation: [0.35, 1.08, 0.18] },
    ] as const;

    const orbits = orbitConfigs.map(({ radius, tube, rotation }) => {
      const orbit = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 8, 220), orbitMaterial);
      orbit.rotation.set(rotation[0], rotation[1], rotation[2]);
      group.add(orbit);
      return orbit;
    });

    // Particle field (Starfield/Energy dust)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const isCyan = Math.random() > 0.4;
      colors[i * 3] = isCyan ? 0.0 : 0.16;
      colors[i * 3 + 1] = isCyan ? 0.9 : 0.47;
      colors[i * 3 + 2] = 1.0;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const logoUrls = [
      "/logos/javascript.svg",
      "/logos/react.svg",
      "/logos/nextjs.svg",
      "/logos/typescript.svg",
      "/logos/nodejs.svg",
      "/logos/html5.svg",
      "/logos/css3.svg",
      "/logos/tailwindcss.svg",
      "/logos/git.svg",
      "/logos/github.svg",
      "/logos/mongodb.svg",
      "/logos/postgresql.svg",
    ];

    const textureLoader = new THREE.TextureLoader();
    const logoMaterials = logoUrls.map((url) => {
      const texture = textureLoader.load(url);
      texture.colorSpace = THREE.SRGBColorSpace;
      return new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        color: new THREE.Color(0x00e5ff),
      });
    });

    const nodes = logoUrls.map((url, index) => {
      const orbitIndex = index % orbitConfigs.length;
      const config = orbitConfigs[orbitIndex];
      const theta = (index / logoUrls.length) * Math.PI * 2 + (index * 0.52);

      const pos = new THREE.Vector3(config.radius * Math.cos(theta), config.radius * Math.sin(theta), 0);
      const euler = new THREE.Euler(config.rotation[0], config.rotation[1], config.rotation[2]);
      pos.applyEuler(euler);

      const material = logoMaterials[index];
      const sprite = new THREE.Sprite(material);
      sprite.position.copy(pos);

      const size = index % 3 === 0 ? 0.13 : (index % 2 === 0 ? 0.105 : 0.085);
      const scaleFactor = size * 2.8;
      sprite.scale.set(scaleFactor, scaleFactor, 1.0);

      group.add(sprite);
      return { sprite, size };
    });

    scene.add(new THREE.AmbientLight(0xffffff, 0.48));
    const cyanLight = new THREE.PointLight(0x00e5ff, 4, 18);
    cyanLight.position.set(4, 4, 6);
    scene.add(cyanLight);
    camera.position.z = 6.6;

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
        const elapsed = (performance.now() - startedAt) / 1000;

        // Smooth mouse lerp
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        group.rotation.y = elapsed * 0.18 + currentRotationY;
        group.rotation.x = Math.sin(elapsed * 0.3) * 0.08 + currentRotationX;

        shell.rotation.y = elapsed * 0.08;
        core.rotation.y = elapsed * 0.06;

        // Core pulsating breathing animation
        const pulse = 1 + Math.sin(elapsed * 1.5) * 0.05;
        core.scale.setScalar(pulse);
        coreMaterial.emissiveIntensity = 0.32 + Math.sin(elapsed * 1.5) * 0.15;

        // Rotate particles opposite direction
        particles.rotation.y = -elapsed * 0.04;
        particles.rotation.z = elapsed * 0.015;

        orbits.forEach((orbit, index) => {
          orbit.rotation.z += 0.0008 + index * 0.00022;
        });

        nodes.forEach(({ sprite, size }, index) => {
          const scaleFactor = size * 2.8 * (1 + Math.sin(elapsed * 1.8 + index) * 0.12);
          sprite.scale.set(scaleFactor, scaleFactor, 1.0);
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
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      core.geometry.dispose();
      coreMaterial.dispose();
      shell.geometry.dispose();
      shellMaterial.dispose();
      orbits.forEach((orbit) => orbit.geometry.dispose());
      orbitMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      logoMaterials.forEach((material) => {
        if (material.map) material.map.dispose();
        material.dispose();
      });
      container.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" style={{ width: "100%", height: "100%" }} />;
}
