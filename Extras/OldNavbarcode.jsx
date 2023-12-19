import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IconButtons from "./IconButtons";

import "./Navbar.css";
import { categoriesArray } from "../utils/categoriesObject";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };
  const cancelRefresh = (e) => {
    e.preventDefault();
  };

  return (
    <Navbar expand="lg" className="navbar-container">
      <Container>
        <IconButtons />
        {/* <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={cancelRefresh} href="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={cancelRefresh} href="/about">
              About
            </Nav.Link>
            <Nav.Link onClick={cancelRefresh} href="#link">
              Services
            </Nav.Link>
            <Nav.Link onClick={cancelRefresh} href="#link2">
              Services
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={cancelRefresh} href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={cancelRefresh} href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={cancelRefresh} href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={cancelRefresh} href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
