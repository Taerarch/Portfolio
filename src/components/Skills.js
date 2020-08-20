import React from 'react';
import './css/Skills.css';
import {Col, Row, Container} from 'react-bootstrap';
import {FirebaseLogo, HerokuLogo, JQueryLogo, JsLogo, NodejsLogo, RailsLogo, RubyLogo, ReactLogo} from './ImageList.js'

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <Container fluid >
        <Row>
          <Col md={1}></Col>
          <Col md={1}></Col>
          <Col md={1}>
            {FirebaseLogo}
          </Col>
          <Col md={1}>
            {HerokuLogo}
          </Col>
          <Col md={1}>
            {JQueryLogo}
          </Col>
          <Col md={1}>
            {JsLogo}
          </Col>
          <Col md={1}>
            {NodejsLogo}
          </Col>
          <Col md={1}>
            {RailsLogo}
          </Col>
          <Col md={1}>
            {RubyLogo}
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
