import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { shiftLeft } from "three/examples/jsm/nodes/Nodes.js";
import  Mesh  from 'three';

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

/* // Set up the camera
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);*/
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight , 0.1, 1000);
 
  
    const renderer = new THREE.WebGLRenderer(
      {antialias : true}
    );
    renderer.setSize(window.innerWidth, window.innerHeight);
    
//create light
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 10 );
light.position.setX(1)
light.position.setZ(1)
scene.add(light)

    // Attach the renderer to the refContainer div
    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }
    const geometry = new THREE.SphereGeometry(5, 50, 50);

    const material = new THREE.MeshBasicMaterial({color:0x3268F8});
    
    const sphere = new THREE.Mesh(geometry,material);
    
    scene.add(sphere);
    
    
    //create background Area
    const backgroundGeometry = new THREE.BoxGeometry(-1000, -1000, -1000);
    const backgroundMaterial = new THREE.MeshBasicMaterial({ color: "#474747" });

    const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial)
    scene.add(background)

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.y =+ .003
        renderer.render(scene, camera);
    };
    //the coordinates on a circle x,y can be calculated with radius (r) and angle of the point relative to the top (a)
    //x=r*sin(a)  y=r*cos(a) 
 
    animate();

    return () => {
      // Cleanup on unmount
      renderer.dispose();
    };
  }, []);

  return <div ref={refContainer} style={{ width: '100%', height: '100vh' }} />;
}
