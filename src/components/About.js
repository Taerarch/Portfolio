import React from 'react';
import './css/About.css'
import {MatthewHeadshot} from './ImageList'
import {Col, Row, Container} from 'react-bootstrap';


function About() {
  return (
    <div className="about">
      <Container fluid>
        <Row>
          <Col md={1}> </Col>
          <Col md={6}> </Col>
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
