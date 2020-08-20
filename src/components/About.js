import React from 'react';
import './css/About.css'
import {MatthewHeadshot} from './ImageList'
import {Col, Row, Container, Accordion, Card, Button} from 'react-bootstrap';
import {AboutObject} from "./helpers/AboutObject"

function About() {
  return (
    <div className="about">
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col md={6}>
            <Accordion defaultActiveKey="1">
              {AboutObject.map((a) =>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      {a.title}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      {a.body}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )}
            </Accordion>
          </Col>
          <Col id="headshot" md={4}>
            {MatthewHeadshot}
          </Col>
          <Col md={1}> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
