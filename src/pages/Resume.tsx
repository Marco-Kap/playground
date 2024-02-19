import { Card, Container, Image, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="src/assets/bewerbungsfoto-quadratisch.jpg"
            width={420}
            style={{ borderRadius: "50%" }}
            alt="bewerbungsfoto"
          />
        </Col>
      </Row>

      <h2 style={{}}>Berufserfahrung</h2>
      <hr></hr>
      <Card className="my-card" text="white">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <p>2020/08 - Heute</p>
            <p>Ahorn-Apotheke, Korbach</p>
          </Card.Title>
          <hr></hr>
          <Card.Text>
            Meine momentanen Aufgaben umfassen das Folgende:
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Bildungsweg</h2>
      <hr></hr>
      <Card className="my-card" text="white">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between"></Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
