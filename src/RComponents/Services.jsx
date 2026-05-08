import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.css";

function Services() {
  return (
    <Container className="py-5" >

      <h1 id="servicos" className="services-title text-center mb-5 fw-bold">
        Nossos Serviços
      </h1>

      <Row className="g-4 justify-content-center">

        <Col lg={3} md={6} xs={12} className="d-flex align-items-stretch">
          <div className="service-card">
            <h4>Marketing Digital</h4>
            <p>Estratégias para aumentar sua presença online</p>
          </div>
        </Col>

        <Col lg={3} md={6} xs={12} className="d-flex align-items-stretch">
          <div className="service-card">
            <h4>Promoção de Marcas</h4>
            <p>Fortalecemos a identidade da sua marca</p>
          </div>
        </Col>

        <Col lg={3} md={6} xs={12} className="d-flex align-items-stretch">
          <div className="service-card">
            <h4>Gestão de Mídias Sociais</h4>
            <p>Transformamos seguidores em Clientes e presença em Resultados</p>
          </div>
        </Col>

        <Col lg={3} md={6} xs={12} className="d-flex align-items-stretch">
          <div className="service-card">
            <h4>Página Web</h4>
            <p>Criação e manutenção de páginas web profissionais</p>
          </div>
        </Col>

          <Col lg={3} md={6} xs={12} className="d-flex align-items-stretch">
          <div className="service-card">
            <h4>Trafégo Pago</h4>
            <p>Anúncios certos, no público certo, no momento certo</p>
          </div>
        </Col>

  

      </Row>

    </Container>
  );
}

export default Services;