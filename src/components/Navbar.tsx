import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="bottom"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="responsive-navbar-nav">
            <Nav>
              <Link className="" to="/resume">
                Resume
              </Link>
              <Link className="" to="mailto:marco-kappeller.bewerbung@gmx.de">
                Get in touch
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
      <Outlet />
    </>
  );
}
