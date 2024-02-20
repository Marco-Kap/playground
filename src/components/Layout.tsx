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
            className=" bg-body-tertiary"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            className=" bg-body-tertiary"
            id="responsive-navbar-nav"
            style={{ justifyContent: "center" }}>
            <Nav className=" bg-body-tertiary">
              <Nav.Link>
                <Link className="link" to="/resume">
                  Resume
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/">
                  Portfolio
                </Link>
              </Nav.Link>
              <Nav.Link
                className="link"
                href="mailto:marco-kappeller.bewerbung@gmx.de">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
