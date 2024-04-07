import Canvas from "../components/Canvas";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Canvas />
      <div className="container">
        <div className="card my-card">
          <h2>Kürzliche Projekte</h2>
          <div></div>
          <p>Ahornapo</p>
          <Project></Project>
        </div>
      </div>
    </>
  );
}
