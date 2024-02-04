import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <div>
          <Link to="portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/cv">CV</Link>
        </div>
        <Outlet />
      </nav>
    </div>
  );
}
