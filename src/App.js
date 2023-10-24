import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <Container fluid className="container">
        <Row>
          <Col>
            <h1 className="title text-left px-2 my-3">Ciao!</h1>
            <p className="text-left px-2">
              test deploy Mi chiamo Federico, ho 33 anni e offro lezioni di
              ripetizione per ragazz* delle elementari e medie. Sebbene la mia
              professione principale sia quella di programmatore, ho un
              background accademico totalmente diverso, infatti sono laureato in
              Lingue Orientali e ho un master in Antropologia Culturale. Ho già
              avuto il piacere di aiutare altri studenti nel loro percorso di
              studi. Se siete curiosi di conoscermi meglio o di discutere di
              come potrei aiutare vostr* figli*, non esitate a contattarmi sul
              mio
              <a className="mx-1" href="https://wa.me/+393349658798">
                Whatsapp.
              </a>
              Inoltre, potete consultare il mio
              <a
                className="mx-1"
                href="https://www.linkedin.com/in/federico-palozzi-77a93494/"
              >
                profilo Linkedin
              </a>{" "}
              per avere qualche informazione in più. Spero di avere presto
              l'opportunità di sentirci e di conoscervi.
            </p>
            <p className="text-left px-2 footer">
              P.S ti chiedo cortesemente di condividere questa pagina con chi
              potrebbe essere interessato cliccando sulla faccina
              <WhatsAppShareButton />
              grazie!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function WhatsAppShareButton() {
  const shareOnWhatsApp = () => {
    const websiteURL = "https://federicopalozzi.netlify.app/";
    const encodedURL = encodeURIComponent(websiteURL);
    const message = encodedURL;
    const whatsappURL = "https://wa.me/?text=" + message;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button className="icon-button mx-1" onClick={shareOnWhatsApp}>
      <FontAwesomeIcon size="2x" color="yellow" icon={faSmile} />
    </button>
  );
}

export default App;
