import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <h1 style={{marginBottom:"10px",}}>Contacte-nos</h1>

      <Container className="text-center">
        <div className="contact-buttons">
          <a
            href="mailto:Socialmideacompany@gmail.com?subject=Serviços%20Social%20Midea%20&body=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Social%20Midea%20Company.%E2%80%8B"
            className="btn-contact email"
          >
            <i className="bi bi-envelope-fill"></i> Email
          </a>

          <a
            href="https://wa.me/244930722855?text=Olá%2C%20Quero%20saber%20mais%20acerca%20dos%20vossos%20serviços%E2%80%8B"
            target="_blank"
            rel="noreferrer"
            className="btn-contact whatsapp"
          >
            <i className="bi bi-whatsapp"></i> WhatsApp
          </a>

          <a
            href="https://instagram.com/socialmidea_company"
            target="_blank"
            rel="noreferrer"
            className="btn-contact instagram"
          >
            <i className="bi bi-instagram"></i> Instagram
          </a>

          <a
            href="tel:930722855"
            className="btn-contact phone"
          >
            <i className="bi bi-telephone-fill"></i> Telefone
          </a>
        </div>

        <p className="mt-4 copyright">
          © 2026 Social Midea Company. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;