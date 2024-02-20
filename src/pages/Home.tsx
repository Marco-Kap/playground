import { useRef } from "react";

export default function Home() {
  let width = "100%";
  let height = "auto";

  const canvasRef = useRef(null);
  /*
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //draw everthing in character array
    characters.map((character) => {
      ctx.fillStyle = "red";
      ctx.font = "50px serif";
      ctx.fillText(character, 120, 120);
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
      <canvas ref={canvasRef} />
      <div className="row ms-auto">
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
    </>
  );
}
