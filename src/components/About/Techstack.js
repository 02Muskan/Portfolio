import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import ExpressSvg from "../../Assets/icons8-express-js.svg";
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiCss3,
  DiBootstrap,
  DiMysql,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <span>Html</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <span>Css</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <span>Bootstrap</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span>Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span>MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ExpressSvg} alt="Express Logo" />
        {/* Adjust width and height as needed */}
        <span>Express js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span>Node js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <span>C++</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span>Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <span>Mysql</span>
      </Col>
    </Row>
  );
}

export default Techstack;
