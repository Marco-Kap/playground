import { Card, Container, Image, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="src/assets/bewerbungsfoto-quadratisch.jpg"
            width={340}
            style={{ borderRadius: "50%" }}
            alt="bewerbungsfoto"
          />
        </Col>
        <Col>
          <Card className="my-card mt-4">
            <Card.Body>Hallo</Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 style={{}}>Berufserfahrung</h2>
      <hr></hr>
      <Card className="my-card">
        <Card.Body>
          <Card.Title>
            <div className="row">
              <div className="col-md-6">
                <p>2022/08 - Heute</p>
              </div>
              <div className="col-md-5">
                <p className="fs-2">Systemadministrator</p>
                <p className="fs-4">Ahorn-Apotheke, Korbach</p>
                {"  "}
              </div>
            </div>
          </Card.Title>
          <hr></hr>
          <Card.Text>
            <div className="row">
              <div className="col-md-6">
                <p>Meine momentanen Aufgaben umfassen:</p>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Erstellen der Webseite mit Next.js und Wordpress</li>
                  <li>Windows Server Administration</li>
                  <li>Integration des Shopsystems</li>
                  <li>Anbinden der Webseite an Notdienst API des LAK</li>
                  <li>
                    Datenschutz konformen Upload von E-Rezepten durch Kunden
                    ermöglichen
                  </li>
                  <li>
                    Erstellen eines E-Mail Templates für den Massenversand
                  </li>
                  <li>
                    Beseitigen redundater Kundendatensätze in der Datenbank
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-card">
        <Card.Body>
          <Card.Title>
            <div className="row">
              <div className="col-md-6">
                <p>2020/04 - 2022/02</p>
              </div>
              <div className="col-md-5">
                <p className="fs-2">Fontend Entwickler</p>
                <p className="fs-3">2mt Software Solutions GmbH & co. KG</p>
                {"  "}
              </div>
            </div>
          </Card.Title>
          <hr></hr>
          <Card.Text>
            <div className="row">
              <div className="col-md-6">
                <p>Meine Aufgaben umfassten das Folgende:</p>
              </div>
              <div className="col-md-6">
                <ul>
                  <li></li>
                  <li></li>
                  <li>Erstellen einer Wordpress Seite</li>
                  <li></li>
                </ul>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Bildungsweg</h2>
      <hr></hr>
      <Card className="my-card">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <div>
              <p>2019/02</p>
            </div>{" "}
            2020
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
