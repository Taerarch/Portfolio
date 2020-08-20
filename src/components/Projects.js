import React from 'react';
import {useState} from 'react';
import './css/Projects.css';
import {Card, Col, Row, Container, Button} from 'react-bootstrap';
import {ProjectsObject} from './helpers/ProjectsObject.js'

function Projects() {
  const [isClicked, setClick] = useState('');

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
                  <Card.Img variant="top" src={p.image} />
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
                  <Card.Img variant="top" src={p.image} />
                  <Card.Title id="displayTitle">{p.name}</Card.Title>
                  <Card.Text>
                    <Container fluid>
                      <Row>
                        <Col id="details" md={6}>
                          {p.details.map((deets) =>
                            <p key={deets.length}>{deets}</p>
                          )}
                        </Col>
                        <Col md={2}></Col>
                        <Col md={4}>
                          {p.technologies.map((tech) =>
                            <li key={tech}>{tech}</li>
                          )}
                        </Col>
                      </Row>
                    </Container>
                  </Card.Text>
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
