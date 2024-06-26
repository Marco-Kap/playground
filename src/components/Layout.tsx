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
        <Container className=" bg-body-tertiary">
          <Navbar.Toggle
            className=" bg-body-tertiary mb-2"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            className=" bg-body-tertiary"
            id="responsive-navbar-nav"
            style={{ justifyContent: "center" }}>
            <Nav className=" bg-body-tertiary">
              <Link className="link" to="/resume">
                Resume
              </Link>
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/">
                Portfolio
              </Link>
              Contact
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
