import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.css";

const services = [
  {
    icon: "bi bi-bar-chart-line",
    title: "Marketing Digital",
    description: "Estratégias inteligentes para ampliar sua presença online e gerar resultados reais.",
  },
  {
    icon: "bi bi-award",
    title: "Promoção de Marcas",
    description: "Fortalecemos sua identidade visual e construímos reconhecimento da marca.",
  },
  {
    icon: "bi bi-people",
    title: "Gestão de Mídias Sociais",
    description: "Transformamos seguidores em clientes por meio de conteúdo relevante e engajador.",
  },
  {
    icon: "bi bi-laptop",
    title: "Página Web",
    description: "Criação e manutenção de sites profissionais para sua empresa se destacar online.",
  },
  {
    icon: "bi bi-currency-dollar",
    title: "Tráfego Pago",
    description: "Campanhas otimizadas para alcançar o público certo com o melhor retorno possível.",
  },
];

function Services() {
  return (
    <Container className="services-section py-5">
      <div className="text-center mb-5">
        <h1 id="servicos" className="services-title fw-bold">
          Nossos Serviços
        </h1>
        <p className="services-subtitle mx-auto mt-3">
          Soluções completas de marketing digital e presença online, feitas para impulsionar sua marca
          com confiança e criatividade.
        </p>
      </div>

      <Row className="g-4 justify-content-center">
        {services.map((service) => (
          <Col key={service.title} lg={3} md={6} xs={12} className="d-flex align-items-stretch">
            <div className="service-card">
              <div className="service-card-icon">
                <i className={service.icon} aria-hidden="true" />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
