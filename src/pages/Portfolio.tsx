export default function Portfolio() {
  return (
    <div className="container">
      <h2>Recent Work</h2>
      <div className="row">
        <div className="col">
          <div id="work1" className="card bg-warning text-light">
            <img
              src="playground/server-farm-monkey-repair-644x644.jpg"
              alt="daicy"
              width="100%"
              height="auto"
            />
          </div>
          <div id="work2" className="card">
            <img
              src="playground/monkey2.png"
              alt="daicy"
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="col">
          <div id="work3" className="card">
            <img
              src="playground/monkey.png"
              alt="daicy"
              width="100%"
              height="auto"
            />
            <div><h2>Ahorn-Apotheken App</h2>
            <p>
              Die hauseigene App der Ahorn-Apotheke soll vorerst nur das Einlösen von E-Rezepten über NFC Kontakt mit einer elektronischen Gesundheitskarte. Eine Shoplösung ist bis auf Weiteres nicht geplant.
              </p>
              </div>
          </div>
          <div id="work4" className="card">
            <img
              src="playground/Unbenannt.png"
              alt="daicy"
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
