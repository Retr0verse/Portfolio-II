import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Resume Application",
      description: "(Desktop)",
      demoLink: "https://retr0verse.github.io/CV_application/",
      repoLink: "https://github.com/Retr0verse/CV_application/",
      imgUrl: projImg4,
    },
    {
      title: "E-Commerce Site",
      description: "(Desktop)",
      demoLink: "https://retr0verse.github.io/e-commerce-app/",
      repoLink: "https://github.com/Retr0verse/e-commerce-app/",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio",
      description: "(Fully responsive)",
      demoLink: "https://portfolio-ii-contact-form.onrender.com/",
      repoLink: "https://github.com/Retr0verse/Portfolio-II/",
      imgUrl: projImg7,
    },
    {
      title: "HTML Accessibility",
      description: "(Fully responsive)",
      demoLink: "https://retr0verse.github.io/HTML-Accessibility/",
      repoLink: "https://github.com/Retr0verse/HTML-Accessibility/",
      imgUrl: projImg2,
    },
    {
      title: "Calculator",
      description: "(Desktop)",
      demoLink: "https://retr0verse.github.io/calculator/",
      repoLink: "https://github.com/Retr0verse/calculator/",
      imgUrl: projImg6,
    },
    {
      title: "Etch-a-Sketch",
      description:"(Desktop)",
      demoLink: "https://retr0verse.github.io/Etch-a-Sketch/",
      repoLink: "https://github.com/Retr0verse/Etch-a-Sketch/",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> These projects embody my passion for crafting digital experiences that are both visually captivating and user-friendly.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">T-Minus 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">T-Minus 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">T-Minus 1</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Launching Soon.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Mission in Progress.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}