import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function App() {
  return (
    <Container fluid className="container">
      <Row>
        <Col>
          <h1 className="title text-left px-2">Ciao a tutti,</h1>
          <p className="text-left px-2">
            Mi chiamo Federico e offro lezioni di ripetizione per ragazz* delle
            elementari e medie. Sebbene la mia professione principale sia quella
            di programmatore, ho un background accademico totalmente diverso,
            infatti sono laureato in Lingue Orientali e ho un master in
            Antropologia Culturale. Ho già avuto il piacere di aiutare altri
            studenti nel loro percorso di studi. Se siete curiosi di conoscermi
            meglio o di discutere di come potrei aiutare vostr* figli*, non
            esitate a contattarmi sul
            <a className="mx-1" href="https://wa.me/+393349658798">
              mio whatsapp.
            </a>
            Inoltre, potete consultare il mio
            <a
              className="mx-1"
              href="https://www.linkedin.com/in/federico-palozzi-77a93494/"
            >
              profilo Linkedin
            </a>{" "}
            per avere un'idea più chiara del mio background. Spero di avere
            presto l'opportunità di sentirci e di conoscervi.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
