import { useRef } from "react";
import * as THREE from "three";
import Canvas from "../components/Canvas";

export default function Home() {
  let width = "100%";
  let height = "auto";

  // const canvasRef = useRef(null);

  /* const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  
  camera.position.z = 5;
  
  function animate() {
    requestAnimationFrame( animate );
  
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    renderer.render( scene, camera );
  }
  
  animate(); */

  /*
/*
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 110;
    //draw everthing in character array
    characters.map((character) => {
      x = x + 10;
      ctx.fillStyle = "red";
      ctx.font = "50px serif";
      ctx.fillText(character, x, 120);
    });

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 100);

    // Clean up
    return () => {
      // Cleanup code, if necessary
    };
  }, []); // Empty dependency array means this effect runs once on mount */

  return (
    <>
      <Canvas />
      {/* <div className="row ms-auto">
        <div className="col-md-4">
          <img
            src="src\assets\server-farm-monkey-repair-644x644.jpg"
            width={width}
            height={height}
            alt="monkey"
          />
        </div>
        <div className="col-md-8">
          <h2 id="h1">Still working on the site</h2>
          <h2 id="h2">It´ll look awesome later, really</h2>
          <h2 id="h3">I promise</h2>
          <h2>new day, new monkey</h2>
        </div>
      </div>
      <hr></hr>*/}
    </>
  );
}
