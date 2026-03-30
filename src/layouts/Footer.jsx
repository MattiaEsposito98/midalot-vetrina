import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <Container className="footer-inner">

        <div className="footer-brand">
          <div className="footer-logoWrap">
            <img src="/Midalot.png" alt="Logo Mida" className="footer-logo" />
            <span className="footer-brandName">Mida</span>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Mida. All rights reserved.
          </p>
        </div>

        <div className="footer-contacts">
          <p className="footer-contact-text">
            Contattaci:
          </p>

          <div className="footer-links">
            <a
              href="https://www.instagram.com/mida.lot/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="bi bi-instagram"></i>
              <span>@mida.lot</span>
            </a>

            <a
              href="mailto:midalot@libero.it"
              className="footer-link"
            >
              <i className="bi bi-envelope"></i>
              <span>midalot@libero.it</span>
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
}