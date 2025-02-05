import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { IoDocumentTextOutline } from "react-icons/io5";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muskan Agarwal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <div
                style={{ padding: 50, textAlign: "left" }}
                className="homeButton"
              >
                <a
                  href={
                    "https://drive.google.com/file/d/1aF647K-iE9xpzY7SQibGs4ftMeaxvQQZ/view?usp=sharing"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="rButton">
                    <IoDocumentTextOutline />
                    &nbsp;Resume
                  </button>
                </a>
                <a href={"#about"}>
                  <button className="rButton" style={{ marginLeft: "40px" }}>
                    <IoDocumentTextOutline />
                    &nbsp;Contact
                  </button>
                </a>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </>
  );
}

export default Home;
