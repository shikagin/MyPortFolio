import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import "animate.css";

const projects = [
  {
    title: "Smart Home Automation App",
    description: "Embedded Systems Development",
    imgUrl: projImg1,
    gitUrl: "https://github.com/shikagin/Domov.git",
  },
  {
    title: "Web Application for Managing Patient Records",
    description: "Back-End Development",
    imgUrl: projImg2,
    gitUrl: "https://github.com/shikagin/Igl_Project.git",
  },
  {
    title: "Smart HR Platform",
    description: "Front-End Development",
    imgUrl: projImg3,
    gitUrl: "https://github.com/shikagin/Smart-HR-Platform.git",
  },
];

function Projects() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size="">
            <div>
              <h2>Projects</h2>
              <p>
                A showcase of the ideas I've brought to life blending code,
                creativity, and purpose.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Projects;
