import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiEclipseide,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span>VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <span>Eclipse</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span>Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <span>Vercel</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
