import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

export default function MyNav() {
  return (
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
            <Nav.Link className="" href="/resume">
              Resume
            </Nav.Link>
            <Nav.Link
              className=""
              href="mailto:marco-kappeller.bewerbunggmx.de">
              Get in touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
