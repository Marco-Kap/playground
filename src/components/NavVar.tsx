import React from "react";
import { Container, NavItem, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Portfolio from "../Portfolio";
import Navitem from "react-bootstrap";

export default function Layout() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>My Logo</Navbar.Brand>
      </Container>
      <NavItem>
        <Link to="/resume"></Link>
      </NavItem>
      <Navbar.Navitem>
        <Link to="/portfolio"></Link>
      </Navbar.Navitem>
    </Navbar>
  );
}
