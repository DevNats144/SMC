import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <h1>Contacte-nos</h1>

      <Container className="text-center">
        <div className="contact-buttons">
          <a
            href="mailto:Socialmideacompany@gmail.com?subject=Quero%20saber20%mais&body=Olá,20%gostaria20%de20%saber20%mais20%sobre20%os20%serviços20%da20%empresa."
            className="btn-contact email"
          >
            <i className="bi bi-envelope-fill"></i> Email
          </a>

          <a
            href="https://wa.me/930722855"
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
            href="tel:930 722 855"
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