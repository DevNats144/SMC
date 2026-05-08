import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Team.css";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Eduardo Joaquim",
      role: "Copywriter",
      image: "src/assets/PIEduardo.jpeg"
    },
    {
      id: 2,
      name: "Laurindo Borges",
      role: "Gestor de Marketing",
      image: "src/assets/PILaurindo.jpeg"
  },
    {
      id: 3,
      name: "Mauro Domingos",
      role: "Supervisionador   de Resultados criativos ",
      image: "src/assets/PIMaurooo.jpeg"
    },
      {
      name:"Márcio Cunha",
      role: "Filmaker",
      image: "src/assets/PIMarcio.jpeg"
    },
  
    {
      id: 5,
      name: "Jéssica Herbelinda",
      role: "Host",
      image: "src/assets/PIJéssica.jpeg"
    },
    {
      id: 6,
      name: "Madalena Muhongo",
      role: "Assistente Administrativa e Host",
      image: "src/assets/PIMadalena.jpeg"
    },
    {
      id: 7,
      name: "Deniusa Angelino",
      role: "Profissional de Comunicação e imagem",
      image: "src/assets/PIDeniusa.jpeg"
    },
    {
      id: 8,    
      name: "Maria Gonga",
      role: "Secretaria Geral",
      image: "path/to/maria.jpeg"
    },
    
    {
      id: 10,
      name: "Nataniel Gomes",
      role: "Desenvolvedor de Sistemas",
      image: "src/assets/PINats.jpeg"
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