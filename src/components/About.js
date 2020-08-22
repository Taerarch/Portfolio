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
            <h1 id="nameTitle" >Matthew Tudman</h1>
            <Accordion id="aboutAccordion" defaultActiveKey="1">
              {AboutObject.map((a) =>
                <Card key={a.key}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} id={a.key} variant="link" eventKey={a.key}>
                      {a.title}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={a.key}>
                    <Card.Body className="body">
                      {a.body.map((b, index) =>
                        <p key={index + a.key}>{b}</p>
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )}
            </Accordion>
          </Col>
          <Col id="headshot" md={4}>
            <Card>
              <Card.Body>
                {MatthewHeadshot}
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
