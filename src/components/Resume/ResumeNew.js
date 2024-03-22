import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import qrCodeImage from "../../Assets/scannn.png";
import { IoDocumentTextOutline } from "react-icons/io5";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <div className="mb-4 qr">
          <img
            src={qrCodeImage}
            alt="QRCode"
            className="project-card-view-qr"
          />
        </div>

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
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
            &nbsp;Download Resume
          </button>
        </Row> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={
              "https://drive.google.com/file/d/1bNJMJEt6U66HXgSJ1VEcvWPVoSyxy7SO/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }} // Optional: Remove underline from link
          >
            <button className="rButton" style={{ width: "100%" }}>
              <IoDocumentTextOutline />
              &nbsp;Resume
            </button>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
