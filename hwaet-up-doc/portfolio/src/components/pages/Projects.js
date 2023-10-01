import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import '../../styles/projects.css';

const projects = [
  {
    title: '{Routed} in Travel',
    description: 'This is the description for project 2',
    image: '/portfolio/src/images/projectImgs/RoutedInTravel.png',
    link: 'https://travelbucket-e65592a52fba.herokuapp.com/',
    id: "1"
  },
  {
    title: 'Huzzah Music',
    description: 'This is the description for project 1',
    image: ['portfolio/src/images/projectImgs/HuzzahMusicHome.png', 'portfolio/src/images/projectImgs/HuzzahMusic.png'], 
    link: 'https://benhwaet.github.io/Huzzah-Music/',
    id: "2"
  },
  {
    title: 'Password Generator',
    description: 'This is the description for project 3',
    image: ['portfolio/src/images/projectImgs/PasswordGen.png', 'portfolio/src/images/projectImgs/PasswordGen2.png'],
    link: 'https://benhwaet.github.io/Huzzah-Password.Generator/',
    id: "3"
  },
  {
    title: 'Horloge',
    description: 'This is the description for project 3',
    image: 'portfolio/src/images/projectImgs/Horloge.png',
    link: 'https://benhwaet.github.io/Horloge/',
    id: "4"
  },
  {
    title: 'READ All About It',
    description: 'This is the description for project 3',
    image: './images/projectImgs/READIt.png',
    link: 'https://github.com/Benhwaet/READ-All-About-It',
    id: "5"
  },
  {
    title: 'Validate This!: A Password Regex Tutorial',
    description: 'This is the description for project 3',
    image: 'portfolio/src/images/projectImgs/RegExGist.png',
    link: 'https://gist.github.com/Benhwaet/148095f583e12c2ebc24da7e701b1950',
    id: "6"
  },
]

export default function ProjectList() {
  const renderedProjects = projects.map(project =>
    <Row xs={1} md={2} className="g-4 projectCards" key={project.id} project={project} style={{ margin: "30px" }}>
      <Col>
        <Card className="projectCard">
          <Card.ImgOverlay variant="top" src={projects.image} className="projectImg" />
          <Card.Body>
            <Card.Title className="title">
              <a className="titleLink"
                href={projects.link}>{projects.title}</a>
            </Card.Title>
            <Card.Text className="description">
              {projects.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )

  return (
    <div>
      {renderedProjects}
    </div>
  )
};