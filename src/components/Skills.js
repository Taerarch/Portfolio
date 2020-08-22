import React from 'react';
import './css/Skills.css';
import {Col, Row, Container} from 'react-bootstrap';
import {Firebase, Heroku, JQuery, Javascript, Nodejs, Rails, Ruby, ReactLogo} from './ImageList.js'

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <Container fluid >
        <Row>
          <Col md={1}></Col>
          <Col md={1}></Col>
          <Col md={1}>
            {Firebase}
          </Col>
          <Col md={1}>
            {Heroku}
          </Col>
          <Col md={1}>
            {JQuery}
          </Col>
          <Col md={1}>
            {Javascript}
          </Col>
          <Col md={1}>
            {Nodejs}
          </Col>
          <Col md={1}>
            {Rails}
          </Col>
          <Col md={1}>
            {Ruby}
          </Col>
          <Col md={1}>
            {ReactLogo}
          </Col>
          <Col md={1}></Col>
          <Col md={1}></Col>
        </Row>
      </Container>




    </div>
  );
}

export default Skills;
