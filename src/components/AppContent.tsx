import React from "react";

function AppContent() {
  let width = "100%";
  let height = "auto";

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
          <h2>Still working on the site</h2>
          <h2>It´ll look awesome later, really</h2>
          <h2>I promise</h2>
        </div>
      </div>
    </>
  );
}

export default AppContent;
