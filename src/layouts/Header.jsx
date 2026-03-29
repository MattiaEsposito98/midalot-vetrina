import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="custom-navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center gap-2 brand"
        >
          <img
            src="/Midalot.png"
            alt="Logo"
            style={{ width: "26px" }}
          />
          Mida
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/giveaway"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Giveaway
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/collaborazioni"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Collaborazioni
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/servizi"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Servizi
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/recensioni"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Recensioni
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}