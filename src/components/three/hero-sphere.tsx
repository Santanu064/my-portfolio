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

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.92, 72, 72),
      new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      }),
    );
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

    const logoUrls = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
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
      });
    });

    const nodePositions = [
      [-2.72, 0.78, 0.18, 0.18],
      [-2.42, -1.28, 0.02, 0.09],
      [-1.48, -2.36, 0.2, 0.13],
      [-0.68, 2.68, -0.14, 0.11],
      [-0.26, -2.94, 0.08, 0.08],
      [0.42, 1.16, 0.44, 0.13],
      [1.22, 2.34, -0.1, 0.08],
      [1.72, -2.28, 0.16, 0.08],
      [2.42, 1.08, -0.18, 0.09],
      [2.7, -0.02, 0.2, 0.07],
      [2.02, -1.76, 0.04, 0.13],
      [-0.92, 0.44, 0.5, 0.06],
      [0.9, -0.78, 0.48, 0.06],
      [0.08, 3.26, 0.0, 0.11],
    ] as const;

    const nodes = nodePositions.map(([x, y, z, size], index) => {
      const material = logoMaterials[index % logoMaterials.length];
      const sprite = new THREE.Sprite(material);
      sprite.position.set(x, y, z);
      const scaleFactor = size * 2.4;
      sprite.scale.set(scaleFactor, scaleFactor, 1.0);
      group.add(sprite);
      return sprite;
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
        group.rotation.y = elapsed * 0.18;
        group.rotation.x = Math.sin(elapsed * 0.3) * 0.08;
        shell.rotation.y = elapsed * 0.08;
        core.rotation.y = elapsed * 0.06;
        orbits.forEach((orbit, index) => {
          orbit.rotation.z += 0.0008 + index * 0.00022;
        });
        nodes.forEach((node, index) => {
          const size = nodePositions[index][3];
          const scaleFactor = size * 2.4 * (1 + Math.sin(elapsed * 1.8 + index) * 0.12);
          node.scale.set(scaleFactor, scaleFactor, 1.0);
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
      core.geometry.dispose();
      coreMaterial.dispose();
      shell.geometry.dispose();
      shell.material.dispose();
      orbits.forEach((orbit) => orbit.geometry.dispose());
      orbitMaterial.dispose();
      logoMaterials.forEach((material) => {
        if (material.map) material.map.dispose();
        material.dispose();
      });
      container.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" style={{ width: "100%", height: "100%" }} />;
}
