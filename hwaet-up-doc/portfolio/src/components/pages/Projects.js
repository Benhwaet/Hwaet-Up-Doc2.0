import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import avatar from '../../images/KingBugs.png';
import '../../styles/projects.css';

const projects = [
  {
    title: 'Huzzah Music',
    description: 'This is the description for project 1',
    image: avatar,
    link: ''
  },
  {
    title: '{Routed} in Travel',
    description: 'This is the description for project 2',
    image: avatar,
    link: ''
  },
  {
    title: 'Password Generator',
    description: 'This is the description for project 3',
    image: avatar,
    link: ''
  },
  {
    title: 'Quizzle Me This',
    description: 'This is the description for project 3',
    image: avatar,
    link: ''
  },
  {
    title: 'READ All About It',
    description: 'This is the description for project 3',
    image: avatar,
    link: ''
  },
  {
    title: 'Validate This!: A Password Regex Tutorial',
    description: 'This is the description for project 3',
    image: avatar,
    link: ''
  },
]

const ProjectItem = ({ project }) => {
  return (
    <Row xs={1} md={2} className="g-4 projectCards" style={{ margin: "30px" }}>
      <Col>
        <Card className="projectCard">
          <Card.Img variant="top" src={avatar} className="projectImg" />
          <Card.Body>
            <Card.Title className="title">
              <a className="titleLink"
                href={project.link}>{project.title}</a>
            </Card.Title>
            <Card.Text className="description">
              {project.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};


const ProjectList = ({ projects }) => {
  const renderedProjects = projects.map((project) => {
    return <ProjectItem project={project} />
  })

  return (
    <div>
      {renderedProjects}
    </div>
  )
}