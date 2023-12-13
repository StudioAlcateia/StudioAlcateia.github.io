import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { AssetCard } from "./AssetCard";
import projImg1 from "../assets/img/project-elementales.png";
import projImg2 from "../assets/img/project-trueCity.png";
import projImg3 from "../assets/img/Animunch.png";
import assetImg1 from "../assets/img/project-elementales.png";
import assetImg2 from "../assets/img/animunch_backgrounds.jpg";
import assetImg3 from "../assets/img/monstergirls.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pigProp from "../assets/img/Porco_Assado.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Elementales",
      description: "Unity 2D RPG Game",
      imgUrl: projImg1,
      link: "https://play.google.com/store/apps/details?id=com.P3TGaming.Elementales&hl=en",
    },
    {
      title: "True City",
      description: "Unity Zombie Survival Game",
      imgUrl: projImg2,
      link: "https://truecitynft.com/",
    },
    {
      title: "Animunch",
      description: "Em Desenvolvimento",
      imgUrl: projImg3,
    },
  ];

  const assets = [
    {
      title: "Elementales",
      description: "Google Play promo art for Elementales",
      imgUrl: assetImg1,
    },
    {
      title: "Background Levels",
      description: "Different background levels for Animunch",
      imgUrl: assetImg2,
    },
    {
      title: "Monster Girls",
      description: "Character concepts for the MonsterGirls mobile game",
      imgUrl: assetImg3,
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
                <h2>Projetos</h2>
                <p></p> {/*Here we can have text display below the projects tab*/}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Games for Clients</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Art & Assets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Games Autorais</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Para clientes que nos ajudam a fazer a magia acontecer.</p>
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
                      <p>Para clientes que nos ajudam a fazer a magia acontecer.</p>
                      <Row>
                          {
                            assets.map((project, index) => {
                              return (
                                <AssetCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Não temos nenhum projeto autoral ainda, mas fique de olho! Estamos cozinhando nos bastidores. 👀</p>
                      <div className="third-tab-image-container">
                        <img className="third-tab-image" src={pigProp}></img>
                      </div>
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
