import { useEffect, useRef } from "react";

export default function Home() {
  let width = "100%";
  let height = "auto";

  const characters = [
    "ζ",
    "δ",
    "μ",
    "τ",
    "Ξ",
    "Ě",
    "ɖ",
    "ɗ",
    "Ę",
    "ɚ",
    "ɜ",
    "ĕ",
    "Ġ",
    "ɣ",
    "ɤ",
    "ĥ",
    "ʯ",
    "Ĳ",
    "Ï",
    "ì",
    "Ĵ",
    "ʞ",
    "ķ",
    "ŉ",
    "ɯ",
    "ɳ",
    "ʠ",
    "Š",
    "ʆ",
    "Ŧ",
    "ʧ",
    "þ",
    "Ů",
    "ʉ",
    "Ũ",
    "ż",
    "ʓ",
    "ʎ",
    "ʐ",
    "ʭ",
    "ʆ",
  ];

  const canvasRef = useRef(null);
  console.log(characters);

  useEffect(() => {
    const canvas = canvasRef.current;
    //@ts-expect-error
    const ctx = canvas.getContext("2d");

    // Draw on the canvas
    ctx.strokeStyle = "blue";
    //ctx.fillRect(10, 10, 50, 50);
    //ctx.strokeText(characters[0], 10, 50);

    // Clean up
    return () => {
      // Cleanup code, if necessary
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <canvas ref={canvasRef} />
      <div className="row ms-auto">
        <div className="col-md-4">
          <img
            src="src\assets\monkey2.png"
            width={width}
            height={height}
            alt="monkey"
          />
        </div>
        <div className="col-md-8">
          <h2 id="h1">Still working on the site</h2>
          <h2 id="h2">It´ll look awesome later, really</h2>
          <h2 id="h3">I promise</h2>
        </div>
      </div>
    </>
  );
}
