import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import password from "../../Assets/Projects/password.png";
import learned from "../../Assets/Projects/learned.png";
import extension from "../../Assets/Projects/extension.png";
import kerala from "../../Assets/Projects/kerala.png";
import todo from "../../Assets/Projects/todo.png";
import watchit from "../../Assets/Projects/watchit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <h4 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learned}
              isBlog={false}
              title="LearnEd"
              description="Discover the future of learning with our LearnEd website.I've designed an frontend for a college placement project, 
              connecting you to educational resources & career opportunities. Experience to enhance your academic journey.🎓🚀"
              ghLink="https://github.com/02Muskan/LearnEd"
              demoLink="https://learn-ed-delta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Check List"
              description="Manage tasks effortlessly with our React-powered Todo website. Crafted with a user-friendly interface,this website simplifies your daily organization.
              Add, edit, and check off tasks with ease. Stay organized and focused with our straight forward Todo website –your productivity companion.📝🚀"
              ghLink="https://github.com/02Muskan/react-worklist"
              demoLink="https://react-worklist.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extension}
              isBlog={false}
              title="Quick Laugh"
              description="Get ready for daily laughs with Quick laugh, a playful fun extension made with Nlp and API.A seamless blend of tech and humor in every click.
              Crafted with HTML, CSS, and JavaScript, it's your quick fix for a cheerful moment.
              Embark on a laughter-filled journey with Quick Laugh– Where Every Click Sparks a Smile!😄✨"
              ghLink="https://github.com/02Muskan/Joke-Extension"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kerala}
              isBlog={false}
              title="Travel Vibes"
              description="Welcome to Travel Vibes – Your Gateway to Wanderlust!🌍 Immerse yourself in the beauty of destinations showcased with a responsive design and engaging UI.
              🚀Crafted with HTML, CSS, for a seamless user experience. Embark on a visual journey with TravelJoy – Where Adventure Begins!✨"
              ghLink="https://github.com/02Muskan/Travel-Vibes--Landing-Page"
              demoLink="https://travel-vibes-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password Generator"
              description="This is a password generator🔐 website made to unlock the power of strong, secure passwords, used Html css and JavaScript.
              Seamlessly designed to provide simplicity and strength,our generator ensures robust and unique passwords every time."
              ghLink="https://github.com/02Muskan/Password-Generator"
              demoLink="https://password-generator-tau-gilt.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watchit}
              isBlog={false}
              title="Desi Dials"
              description="Welcome to Desi Dials – where style meets precision!Explore the cuarted collection of watches seamlessly presented with HTML,CSS,and JavaScript.
              Find your perfect timepiece effortlessly, as every second counts in style.⌚🌟."
              ghLink="https://github.com/02Muskan/WatchIT"
              demoLink="https://watch-it-liart.vercel.app/#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
