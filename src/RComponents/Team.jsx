import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Team.css";

import PIEduardo from "../assets/PIEduardo.jpeg";
import PILaurindo from "../assets/PILaurindo.jpeg";
import PIMaurooo from "../assets/PIMaurooo.jpeg";
import PIMarcio from "../assets/PIMarcio.jpeg";
import PIJéssica from "../assets/PiJéssica.jpeg";
import PIMadalena from "../assets/PIMadalena.jpeg";
import PIDeniusa from "../assets/PIDeniusa.jpeg";
import PIMaria from "../assets/PIMaria.jpeg";
import PINats from "../assets/PINats.jpeg";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Eduardo Joaquim",
      role: "Copywriter",
      image: PIEduardo
    },
    {
      id: 2,
      name: "Laurindo Borges",
      role: "Gestor de Marketing",
      image: PILaurindo
  },
    {
      id: 3,
      name: "Mauro Domingos",
      role: "Supervisionador   de Resultados criativos ",
      image: PIMaurooo
    },
      {
      name:"Márcio Cunha",
      role: "Filmaker",
      image: PIMarcio
    },
  
    {
      id: 5,
      name: "Jéssica Herbelinda",
      role: "Host",
      image: PIJéssica
    },
    {
      id: 6,
      name: "Madalena Muhongo",
      role: "Assistente Administrativa e Host",
      image: PIMadalena
    },
    {
      id: 7,
      name: "Deniusa Angelino",
      role: "Profissional de Comunicação e imagem",
      image: PIDeniusa
    },
    {
      id: 8,    
      name: "Maria Gonga",
      role: "Secretaria Geral",
      image: PIMaria
    },
    
    {
      id: 10,
      name: "Nataniel Gomes",
      role: "Desenvolvedor de Sistemas",
      image: PINats
    }
  ];

  return (
    <Container className="py-5" id="team">

      <h2 className="team-title text-center mb-5 fw-bold">
        Nossa Equipa
      </h2>

      <Row className="g-4 justify-content-center">
        {teamMembers.map((member) => (
          <Col key={member.id} lg={3} md={6} xs={12} className="d-block align-items-stretch">
            <Card className="team-card">
              <Card.Img variant="top" src={member.image} alt={member.name} className="team-card-img" />
              <Card.Body className="text-center">
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
}

export default Team;