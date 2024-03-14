import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import qrCodeImage from "../../Assets/scan me.png";
import { IoDocumentTextOutline } from "react-icons/io5";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <div className="mb-4 ">
          <img
            src={qrCodeImage}
            alt="QRCode"
            className="project-card-view-qr"
          />
        </div>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <button
            className="rButton"
            variant="primary"
            href={
              "https://drive.google.com/file/d/1bNJMJEt6U66HXgSJ1VEcvWPVoSyxy7SO/view?usp=sharing"
            }
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <IoDocumentTextOutline />
            &nbsp;Download CV
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
