import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout() {
  return (
    <>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Offcanvas navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div>
                <Link to="portfolio">Portfolio</Link>
              </div>
              <div>
                <Link to="/cv">CV</Link>
              </div>
              <div>
                <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
