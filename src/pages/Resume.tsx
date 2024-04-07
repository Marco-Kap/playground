import { Image, Row, Col } from "react-bootstrap";
import Badge from "../components/Badge";

export default function Resume() {
  return (
    <div className="container">
      <Row>
        <Col>
          <Image
            src="./public/bewerbungsfoto-quadratisch.jpg"
            width={340}
            style={{ borderRadius: "50%" }}
            alt="bewerbungsfoto"
          />
        </Col>
        <Col>
          <div className="my-card mt-4">
            <div className="card-body">
              <div className="">
                Hallo, mein Credo lautet Das UI muss schön sein und Code muss
                sauber sein.
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <h2 style={{}}>Berufserfahrung</h2>
      <hr></hr>
      <div className="card my-card">
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              <div className="col-md-6">
                <p>2022/08 - Heute</p>
              </div>
              <div className="col-md-5">
                <p className="fs-2">Systemadministrator</p>
                <p className="fs-4">Ahorn-Apotheke, Korbach</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <p>Meine momentanen Aufgaben umfassen:</p>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Planung und Erweiterung der Webseite</li>
                  <li></li>
                  <li>Windows Server Administration</li>
                  <li>Integration des Shopsystems</li>
                  <li>Anbinden der Webseite an Notdienst API des LAK</li>
                  <li>
                    Datenschutz konformen Upload von E-Rezepten durch Kunden
                    ermöglichen
                  </li>
                  <li>
                    Erstellen und saisonales Anpassen eines E-Mail Templates für
                    den Massenversand
                  </li>
                  <li>Datenbankverwaltung</li>
                </ul>
              </div>
              <div className="col-6 d-flex align-self-center row">
                <Badge bg="#ee7c11" content="Next.js" />
                <Badge bg="#ee7c11" content="HTML5" />
                <Badge bg="#ee7c11" content="CSS3" />
                <Badge bg="#ee7c11" content="JavaSript" />
                <Badge bg="#ee7c11" content="TypeScript" />
                <Badge bg="#ee7c11" content="Windows Server" />
                <Badge bg="#ee7c11" content="MySQL" />
                <Badge bg="#ee7c11" content="Powershell" />
                <Badge bg="#ee7c11" content="HTML5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-card">
        <div className="card-body">
          <div className="card-title">
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
          </div>
          <hr></hr>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <p>Meine Aufgaben umfassten das Folgende:</p>
              </div>
              <div className="col-md-6">
                <div>
                  <p></p>
                </div>
                <ul>
                  <li>
                    Umsetzung der Web Uontent Accessibility Guidelines auf AA
                    Niveau
                  </li>
                  <li>
                    Erweiterung von Daicy um Impf- und Genesenenzertifikate
                  </li>
                  <li>Erstellen einer Wordpress Seite</li>
                  <li>Unterstützung bei Codereviews</li>
                  <li>
                    Content Management für die Webseite von Daicy mittels
                    October CMS
                  </li>
                </ul>
              </div>
              <div className="col-6 d-flex align-self-center row">
                <Badge bg="#ee7c11" content="React" />
                <Badge bg="#ee7c11" content="React-Native" />
                <Badge bg="#ee7c11" content="HTML5" />
                <Badge bg="#ee7c11" content="CSS3" />
                <Badge bg="#ee7c11" content="JavaSript" />
                <Badge bg="#ee7c11" content="TypeScript" />
                <Badge bg="#ee7c11" content="Wordpress" />
                <Badge bg="#ee7c11" content="GraphQL" />
                <Badge bg="#ee7c11" content="HTML5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Bildungsweg</h2>
      <hr></hr>
      <div className="card my-card">
        <div className="card-body">
          <div className="card-title row">
            <div className="row">
              <div className="col-md-6">
                <p>2020</p>
              </div>
              <div className="col-md-5">
                <p className="fs-2">Fachinformatiker Anwendungsentwicklung</p>
                <p className="fs-4">Deutsche Angestellten Akademie, Marburg</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <p></p>
              </div>
              <div className="col-md-6">
                <div>
                  <p></p>
                </div>
                <ul></ul>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-card">
        <div className="card-body">
          <div className="card-title row">
            <div className="row">
              <div className="col-md-6">
                <p>2018</p>
              </div>
              <div className="col-md-5">
                <p className="fs-2">Soziologie, Kein Abschluß</p>
                <p className="fs-4">Philipps Universität, Marburg</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <p></p>
              </div>
              <div className="col-md-6">
                <div>
                  <p></p>
                </div>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="card my-card">
        <div className="card-body">
          <div className="card-title row">
            <div className="row">
              <div className="col-md-6">
                <p>2007</p>
              </div>
              <div className="col-md-5">
                <p className="fs-2">Chemie Kein Abschluß</p>
                <p className="fs-4">Philipps Universität, Marburg</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <p></p>
              </div>
              <div className="col-md-6">
                <div>
                  <p></p>
                </div>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="card my-card">
        <h2>Fertigkeiten</h2>
      </div>
      <div className="card my-card">
        <div className="card-body">
          <div className="card-title">
            <h2>Sprachen</h2>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>Deutsch</li>
                  <li>Englisch</li>
                </ul>
              </div>
              <div className="col-md-4">Verhandlungssicher</div>
              <div>Muttersprache</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
