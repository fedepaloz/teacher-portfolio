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
              Mi sono formato in antropologia culturale, un campo che esplora la
              complessità e la diversità delle culture umane. Durante i miei
              studi, la mia passione per la tecnologia mi ha guidato verso
              percorsi inaspettati, conducendomi all'affascinante mondo dello
              sviluppo web. Credo fermamente che avere una formazione umanistica
              in un campo così tecnico come la programmazione arricchisca la
              prospettiva di uno sviluppatore. Un background antropologico
              infatti mi ha permesso di approcciarmi ai progetti web con una
              visione olistica, considerando non solo la funzionalità, ma anche
              come gli utenti interagiranno con ciò che creo e come questo
              impatterà le loro culture e società. Trovo pace e ispirazione
              attraverso attività come il trekking e il cicloturismo, che mi
              permettono di connettermi con il mondo intorno a me in un modo
              autentico e significativo. Puoi consultare il mio
              <a
                className="mx-1"
                href="https://www.linkedin.com/in/federico-palozzi-77a93494/"
              >
                profilo Linkedin
              </a>{" "}
              per avere più informazioni e consultare il mio CV.
            </p>
            <p className="text-left px-2 footer">
              P.S ti chiedo cortesemente di condividere questa pagina con chi
              potrebbe essere interessato cliccando qui
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
