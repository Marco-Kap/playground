import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { shiftLeft } from "three/examples/jsm/nodes/Nodes.js";

export default function Tetris() {
  let i: string = "";
  const blocks = {
    long: "long",
    square: "square",
    cross: "cross",
  };
  let posX = 0;
  let posY = 0;
  let posZ = 0;

  
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.code);
      i = e.code;
      if (e.code === "ArrowRight") {
        posX= posX + .2;
      }
      if (e.code === "ArrowLeft") {
        posX = posX - .2;
      }
      if (e.code === "ArrowDown") {
        posY = posY - .2;
      }
      if (e.code === "ArrowUp") {
        posY = posY + .2;
      }
      if (e.code === "Space") {
        posZ = posZ + .2        
      }
      if(e.code === "Slash") {
        posZ = posZ - .2
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);
    
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer to the refContainer div
    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    // Create four spheres with different colors
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

const sphereMaterial1 = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Red
const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
sphere1.position.set(-2, 2, 0);
scene.add(sphere1);

const sphereMaterial2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Green
const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
sphere2.position.set(2, 2, 0);
scene.add(sphere2);

const sphereMaterial3 = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Blue
const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial3);
sphere3.position.set(-2, -2, 0);
scene.add(sphere3);

const sphereMaterial4 = new THREE.MeshStandardMaterial({ color: 0xffff00 }); // Yellow
const sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial4);
sphere4.position.set(2, -2, 0);
scene.add(sphere4);

// Add light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
//factory function for new spheres
function addspheres(id:number) {
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial4)
  sphere.position.setX(posX + id/10)
  sphere.position.setZ(posZ + id/1)
  sphere.position.setY(posY + id/10)
  

    scene.add(sphere)
    if(sphere) {
      sphere.position
    }
}
const jupiterVector = new THREE.Euler(1,2,1)
const jupiterMaterial = new THREE.MeshStandardMaterial({ color: "yellow"})
const jupiterGeometry = new THREE.SphereGeometry(1, 32, 32)
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial)
scene.add(jupiter)
    // Create a cube and add it to the scene
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubematerial = new THREE.MeshBasicMaterial({ color: "red" });
    //create background Area
    const backgroundGeometry = new THREE.BoxGeometry(-1000, -1000, -1000);
    const backgroundMaterial = new THREE.MeshBasicMaterial({ color: "#474747" });
    const cube = new THREE.Mesh(cubeGeometry, cubematerial);
    scene.add(cube);
const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial)
scene.add(background)
    camera.position.z = 5;
//create light
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add(light)
    // Animation loop
jupiter.position.fromArray

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01
      cube.clone();

      cube.position.negate
      cube.position.setX(posX - 1)
      cube.position.setY(posY)
      cube.position.setZ(posZ)

      renderer.render(scene, camera);
    };
    //the coordinates on a circle x,y can be calculated with radius (r) and angle of the point relative to the top (a)
    //x=r*sin(a)  y=r*cos(a) 
    document.addEventListener("keydown", (e) => {
    let id = 1
    console.log(e.code)
    if(e.code === "arrowLeft") {
      posX = posX - .1
    }
    if(e.code === "arrowRight") {
      posX = posX + .1
    }
    if(e.code === "arrowDown") {
      posY = posY - .1
    }
    if (e.code === "arrowUp") {
      posY = posY + .1
    }
    if (e.code === "Enter") {
      addspheres(id)
      console.log("added spere")
      id = id + 1
      console.log("id", id)
    }
    })
    animate();

    return () => {
      // Cleanup on unmount
      renderer.dispose();
    };
  }, []);

  return <div ref={refContainer} style={{ width: '100%', height: '100vh' }} />;
}
