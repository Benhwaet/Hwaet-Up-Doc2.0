import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import avatar from '../images/KingBugs.png';
import './style/projects.css';

export default function Projects() {
return (
    <Row xs={1} md={2} className="g-4 projectCards">
    {Array.from({ length: 6 }).map((_, idx) => (
      <Col key={idx}>
        <Card className="projectCard">
          <Card.Img variant="top" src={avatar} className="projectImg"/>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
)
}