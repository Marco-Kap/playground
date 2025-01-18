import { flushGlobalEffects } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EventDispatcher } from "three";

const OrbitSpheres: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lights
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(20, 1, -1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight("#ffffff");
    scene.add(ambientLight);

    // Parameters for the spheres and their orbits
    const orbitParams = [
      { radius: 7, speed: 0.02, phase: 0, color: 0xfffa64 },
      { radius: 9, speed: 0.015, phase: Math.PI / 2, color: 0x00ff00 },
      { radius: 12, speed: 0.01, phase: Math.PI, color: 0x0000ff },
      { radius: 5, speed: 0.008, phase: Math.PI, color: 0xfada0a },
    ];

    const spheres: { mesh: THREE.Mesh; radius: number; speed: number; phase: number }[] = [];
    //create background Area
    const backgroundGeometry = new THREE.BoxGeometry(-1000, -1000, -1000);
    const backgroundMaterial = new THREE.MeshBasicMaterial({ color: "#474747" });
    const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial)
    scene.add(background)
    // Create spheres
    orbitParams.forEach((param) => {
    
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color: param.color });
      const sphere = new THREE.Mesh(geometry, material);
      spheres.push({ mesh: sphere, ...param });
      window.addEventListener("mouseover", (e) => {
      
  console.log("hover")
        sphere.position.setX(2)
console.log(e)
      })
      scene.add(sphere);
    });

    // Animation function
    const animate = () => {
      const time = Date.now() * 0.1; // Time in seconds

      spheres.forEach(({ mesh, radius, speed, phase }) => {
        const angle = time * speed + phase;
        mesh.position.x = radius * Math.cos(angle);
        mesh.position.y = radius * Math.sin(angle);
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default OrbitSpheres;
