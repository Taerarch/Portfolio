import React from 'react';
import {useState} from 'react';
import './css/Projects.css';
import {Card, Col, Row, Container} from 'react-bootstrap';
import {ProjectsObject} from './helpers/ProjectsObject.js'

function Projects() {
  const [isClicked, setClick] = useState('3');

  const handleClick = (e) => {
    setClick(e.currentTarget.id)
  }

  return (
    <div className="projects">
      <h2>Projects</h2>
      <Container fluid>
        <Row>
          {ProjectsObject.filter(project => project.value !== isClicked).map((p) =>
            <Col key={p.value} md={isClicked === '' ? 3 : 4}>
              <Card onClick={(e) => handleClick(e)} id={p.value} style={{ width: '90%', minHeight: '400px'}}>
                <Card.Body>
                  <Card.Img variant="top" className="projectImages" src={p.image} />
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>
                    {p.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}

        </Row>
        <Row>
          <Col md={2}></Col>
          {ProjectsObject.filter(project => project.value === isClicked).map((p) =>
            <Col key={p.value} md={8}>
              <Card onClick={() => setClick('')} id="projectDisplay" style={{ width: '100%', minHeight: '400px'}}>
                <Card.Body>
                  <Card.Img variant="top" className="projectImages" src={p.image} />
                  <Card.Title id="displayTitle">{p.name}</Card.Title>
                  <Container fluid>
                    <Row>
                      <Col id="details" md={6}>

                        {p.details.map((deets) =>
                          <Card.Text key={deets.length}>
                          {deets}
                          </Card.Text>
                        )}
                      </Col>
                      <Col md={1}></Col>
                      <Col md={5}>
                        <Card style={{ padding: '10px'}}>
                          <Card.Title>Technologies</Card.Title>
                          <Card.Text>
                            {p.technologies.map((tech) =>
                              <li className="techList" key={tech}>{tech}</li>
                            )}
                          </Card.Text>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            )}
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
