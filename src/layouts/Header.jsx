import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import itFlag from "../assets/flags/it.svg";
import gbFlag from "../assets/flags/gb.svg";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

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
            alt="Logo Mida"
            style={{ width: "40px" }}
          />
          Mida
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {t("navHome")}
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/servizi"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {t("navServices")}
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/dicono-di-noi"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {t("navSocialProof")}
            </Nav.Link>

            <div className="header-actions">
              <button
                type="button"
                className="header-chip"
                onClick={() => setLang(lang === "it" ? "en" : "it")}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <img
                  src={lang === "it" ? gbFlag : itFlag}
                  alt="lang"
                  style={{ width: 18, height: 18 }}
                />
                {lang === "it" ? "EN" : "IT"}
              </button>

              <button
                type="button"
                className="header-chip"
                onClick={toggleTheme}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                {theme === "light" ? (
                  <>
                    <i className="fa-solid fa-moon"></i>
                    Dark
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-sun"></i>
                    Light
                  </>
                )}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}