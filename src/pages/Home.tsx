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

  console.log(characters);

  return (
    <>
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
