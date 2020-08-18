import React from 'react';
import './css/Projects.css';
import {Card, Button} from 'react-bootstrap';
import {FirebaseLogo} from './ImageList.js'

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title>Warhammer40k Battleground</Card.Title>
          <Card.Text>
            A React based community center and toolbase to connect the Warhammer40k community and share ideas.
          </Card.Text>
          <Button variant="primary">Expand</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Projects;
