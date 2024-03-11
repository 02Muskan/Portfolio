import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋Hi, I am <span className="purple"> Muskan Agarwal </span> a web
            developer{" "}
            <span className="purple"> from Kharagpur,West Bengal.</span>
            <br />
            <br />
            I successfully completed my BTech in Computer Science & Engineering
            (CSE) at the College of Engineering Bhubaneswar (COEB), Odisha.
            <br />
            <br />
            🚀 After graduation, I joined CloudKaptan Consultancy Services in
            Kolkata as a Software Engineering Intern. I designed apps using
            Salesforce, worked on React projects, and collaborated on various
            operations.
            <br />
            <br />
            🌐 Previously, as a Frontend Developer Intern at SK Naredi
            Consultancy Services in Jamshedpur, I managed landing page access,
            assisted in creative strategizing, and provided frontend web
            designs.
            <br />
            <br />
            📱 With over a year of professional experience under my belt, I'm
            eager to leverage my skills and explore new horizons in the field.
            Explore some of my past web projects in the projects section.
            <br />
            <br />
            🌍 Beyond coding, I find joy in exploring new skills and places.
            Let's connect and explore possibilities!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
