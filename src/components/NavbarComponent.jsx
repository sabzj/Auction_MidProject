import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import IconButtons from "./IconButtons.jsx";
{
  /* <FontAwesomeIcon icon="fa-sharp fa-solid fa-megaphone" /> */
}

import "./navbarComponent.css";
import { categoriesArray } from "../utils/categoriesObject";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
// import LogInMainPage from "../login/LogInMainPage";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };

  return (
    <Navbar expand="lg" className="navbar-container">
      <Container>
        {/* <LogInMainPage /> */}
        {/* <IconButtons /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-item">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/allAuctions">
              All Actions
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <NavDropdownMenu
              title="Categories"
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              {categoriesArray.map((category) => (
                <NavDropdown.Item
                  key={category.values.categoriesArray}
                  as={Link}
                  to={`/category/${category.category}`}
                  className="custom-dropdown-item"
                >
                  {category.category}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <DropdownSubmenu title="hi">
                <NavDropdown.Item>Item1</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/login" className="nav-item">
          LogIn
        </Nav.Link>
        <Nav.Link as={Link} to="/Register" className="nav-item">
          Register
        </Nav.Link>
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            id="item"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Container>
      {/* Modal */}
    </Navbar>
  );
};

export default NavbarComponent;
