/*import { useRef, useEffect } from "react";
import * as THREE from "three";

function Canvas() {
  const refContainer = useRef(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body

    refContainer.current &&
      @ts-expect-error
      refContainer.current.appendChild(renderer.domElement);
    var cubeGeo = new THREE.BoxGeometry(1, 1, 1);
    var skyGeo = new THREE.BoxGeometry(100, 100, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0xee7c11 });

    var skyTexture = new THREE.MeshBasicMaterial({
      color: 0x474747,
      side: THREE.BackSide,
    });
    const skyBox = new THREE.Mesh(skyGeo, skyTexture);
    const cube = new THREE.Mesh(cubeGeo, material);
    skyBox.position.x = cube.position.x + 0.4;
    scene.add(cube);
    scene.add(skyBox);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={refContainer}></div>;
}

export default Canvas;
*/

function Canvas() {
  return (
    <div className="canvas">
      <div className="orbit orbit3">
        <div id="planet1" className="svg1 svg"></div>
      </div>
      <div className="orbit orbit2">
        <div className="svg2 svg"></div>
      </div>
      <div className="orbit orbit1">
        <div className="svg svg3"></div>
      </div>
      <div className="orbit orbit4">
        <div className="svg svg1"></div>
      </div>
      <div className="orbit orbit5">
        <div className="svg svg1"></div>
      </div>
    </div>
  );
}

export default Canvas;
