import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">

        {/* Testo */}
        <div className="footer-text">
          © {new Date().getFullYear()} Mida. All rights reserved.
        </div>

        {/* Social */}
        <div className="footer-socian">
          <a
            href="https://www.instagram.com/mida.lot/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <i className="bi bi-instagram"></i>
            Mida
          </a>
        </div>

      </Container>
    </footer>
  );
}