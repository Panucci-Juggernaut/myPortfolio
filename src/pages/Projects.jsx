import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";

import mern from "../assets/Projects/Mern.png";
import nodeBlog from "../assets/Projects/nodeBlog.png";
import nubi from "../assets/Projects/nubi.png";
import mobileFirst from "../assets/Projects/mobileFirst.png";
import readingList from "../assets/Projects/readingList.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title="Fitness Empire"
              description="a MERN stack application which helps  you track your daily workouts, has a signup and login page, and a dashboard where you can see your daily workouts."
              ghLink="https://github.com/Panucci-Juggernaut/MERN-Stack-Notes"
              demoLink="https://mern-stack-notes.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodeBlog}
              isBlog={false}
              title="Panucci Blog"
              description="My personal blog page build with node.js, express.js and mongoDB. The html are dynamically generated using ejs templating engine. It has an admin page where you can add, delete and update the blogs. The blogs are stored in the mongoDB database. it was built using the MVC architecture."
              ghLink="https://github.com/Panucci-Juggernaut/Node.js-Blog"
              demoLink="https://node-js-blog-y2k6.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nubi}
              isBlog={false}
              title="Nubi Wellness Center"
              description="A landing page for a wellness center. The page is built using HTML, CSS, and JavaScript. The page is fully responsive and has a contact form which sends the data to the email."
              ghLink="https://github.com/Panucci-Juggernaut/NubiServices-Landing-Page"
              demoLink="https://panucci-juggernaut.github.io/NubiServices-Landing-Page/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileFirst}
              isBlog={false}
              title="Mobile First Responsive Portfolio"
              description="A portfolio website using mobile-first responsive design. Features include a custom CSS grid layout, optimized performance, accessible navigation, and modern HTML5 standards to showcase projects and skills effectively."
              ghLink="https://github.com/Panucci-Juggernaut/Mobile-First-Responsive-Portfolio"
              demoLink="https://panucci-juggernaut.github.io/Mobile-First-Responsive-Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readingList}
              isBlog={false}
              title="Reading List"
              description="A reading list application built with React.js and Context API. The application allows you to add, delete, and update the books in your reading list."
              ghLink="https://github.com/Panucci-Juggernaut/ReactContext-Hooks-Notes"
              demoLink="https://booklist-kappa.vercel.app/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;