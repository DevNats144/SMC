import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Footer from "../RComponents/Footer";
import WhatsButton from "../RComponents/WhatsButton";
import "./TeamPage.css";

import PIEduardo from "../assets/PIEduardo.jpeg";
import PILaurindo from "../assets/PILaurindo.jpeg";
import PIMaurooo from "../assets/PIMaurooo.jpeg";
import PIJéssica from "../assets/PiJéssica.jpeg";
import PIMaria from "../assets/PIMaria.jpeg";
import PINats from "../assets/PINats.jpeg";
import PIDeniusa from "../assets/PIDeniusa.jpeg";

const teamMembers = [
  { name: "Eduardo Joaquim", role: "Copywriter", image: PIEduardo },
  { name: "Laurindo Borges", role: "Gestor de Marketing", image: PILaurindo },
  { name: "Mauro Domingos", role: "Supervisor de Resultados Criativos", image: PIMaurooo },
  { name: "Jéssica Herbelinda", role: "Host", image: PIJéssica },
  { name: "Deniusa", role: "Host", image: PIDeniusa },
  { name: "Nataniel Gomes", role: "Desenvolvedor de Software", image: PINats },
  { name: "Maria", role: "Direção Criativa", image: PIMaria }
];

function TeamPage() {
  return (
    <div className="team-page">
      <WhatsButton />
      <main>
        <section className="team-page-intro">
          <Container>
            <div className="team-page-kicker">Por trás de cada ideia</div>
            <div className="team-page-heading-row">
              <div>
                <h1>Talento que transforma<br />presença em impacto.</h1>
                <p>
                  Somos uma equipa multidisciplinar que combina estratégia, criatividade e tecnologia
                  para construir marcas que se fazem notar.
                </p>
              </div>
              <div className="team-page-count" aria-label={`${teamMembers.length} membros da equipa`}>
                <strong>{teamMembers.length}</strong>
                <span>membros<br />da equipa</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="team-page-grid-section">
          <Container>
            <div className="team-page-section-label">A equipa Social Midea</div>
            <Row className="g-4">
              {teamMembers.map((member) => (
                <Col key={member.name} lg={4} md={6} xs={12}>
                  <article className="team-page-card">
                    <div className="team-page-image-wrap">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="team-page-card-copy">
                      <h2>{member.name}</h2>
                      <p>{member.role}</p>
                    </div>
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="team-page-cta">
          <Container>
            <div>
              <span>Vamos criar algo memorável?</span>
              <h2>Uma boa ideia merece<br />uma grande equipa.</h2>
            </div>
            <Link to="/#contacto" className="team-page-cta-link">
              Fale connosco <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TeamPage;