export default function Portfolio() {
  return (
    <div className="container">
      <h2>Recent Work</h2>
      <div className="row">
        <div className="col">
          <div id="work1" className="card bg-warning text-light">
            <img
              src="src/assets/server-farm-monkey-repair-644x644.jpg"
              alt="daicy"
              width="100%"
              height="auto"
            />
          </div>
          <div id="work2" className="card">
            <img
              src="src/assets/monkey2.png"
              alt="daicy"
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="col">
          <div id="work3" className="card">
            <img
              src="src/assets/monkey.png"
              alt="daicy"
              width="100%"
              height="auto"
            />
          </div>
          <div id="work4" className="card">
            <img
              src="src/assets/Unbenannt.png"
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
