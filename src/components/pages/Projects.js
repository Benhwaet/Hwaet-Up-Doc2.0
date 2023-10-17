import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import '../../styles/projects.css';

const projects = [

  {
    title: 'Health SensO',
    description: 'A health app that allows users to track their daily nutritional needs and goals. This app was created in collaboration and is not fully functional.',
    image: '../../images/projectImgs/RoutedInTravel.png',
    link: 'https://salty-temple-29543-b70342d34fb8.herokuapp.com/',
    githublink: 'https://github.com/Benhwaet/HealthSensO',
    id: "1"
  },
  {
    title: '{Routed} in Travel',
    description: 'A travel bucket list app that allows users to create a list of places they want to visit and view them on a map. A journal is also available for users to write about their experiences. This app was created in collaboration and is not fully functional.',
    image: '../../images/projectImgs/RoutedInTravel.png',
    link: 'https://travelbucket-e65592a52fba.herokuapp.com/',
    githublink: 'https://github.com/Benhwaet/Travel-BucketList',
    id: "2"
  },
  {
    title: 'Huzzah Music',
    description: 'This app is a music search list that uses the Spotify API to search for songs and artists. The user can then save their favorite songs to a list. This app was created in collaboration and is not fully functional.',
    image: '../../images/projectImgs/HuzzahMusicHome.png',
    link: 'https://benhwaet.github.io/Huzzah-Music/',
    githublink: 'https://github.com/Benhwaet/Huzzah-Music',
    id: "3"
  },
  {
    title: 'Password Generator',
    description: 'This app allows you to enter the Matrix and create a secure password. The user can choose the length of the password and what characters to include.',
    image: '../../images/projectImgs/PasswordGen.png',
    link: 'https://benhwaet.github.io/Huzzah-Password.Generator/',
    githublink: 'https://github.com/Benhwaet/Huzzah-Password.Generator',
    id: "4"
  },
  {
    title: 'Horloge',
    description: 'This app serves as a daily calendar and displays past, current, and future events. The user can save events to the calendar and they will persist on the page.',
    image: '../../images/projectImgs/Horloge.png',
    link: 'https://benhwaet.github.io/Horloge/',
    githublink: 'https://github.com/Benhwaet/Horloge',
    id: "5"
  },
  {
    title: 'READ All About It',
    description: 'A back end application that uses Inquirer to ask the user questions about their project. The answers are then used to generate a README.md file.',
    image: '../../images/projectImgs/READIt.png',
    link: 'https://github.com/Benhwaet/READ-All-About-It',
    githublink: 'https://github.com/Benhwaet/READ-All-About-It',
    id: "6"
  },
  {
    title: 'Validate This!: A Password Regex Tutorial',
    description: 'This Gist is a tutorial on how to use Regular Expressions to validate a password.',
    image: '../../images/projectImgs/RegExGist.png',
    link: 'https://gist.github.com/Benhwaet/148095f583e12c2ebc24da7e701b1950',
    githublink: 'https://github.com/Benhwaet/Gist-RegEx',
    id: "7"
  },
]

export default function ProjectList() {
  const renderedProjects = projects.map(project =>
    <Row xs={1} md={2} className="g-4 projectCards" key={project.id} project={project} style={{ margin: "30px", display: "flex", justifyContent: "center" }}>
      <Col>
        <Card className="projectCard">
          <Card.Img variant="top" src={project.image} className="projectImg" />
          <Card.Body>
            <Card.Title className="title">
              <a className="titleLink"
                href={project.link}>{project.title}</a>
            </Card.Title>
            <Card.Text className="description">
              {project.description}
            </Card.Text>
            <div className="links">
              <a className="githubLink"
                href={project.githublink}>GitHub Repo</a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )

  return (
    <div className="projectPage">
      <div>
        <h2 className="pageTitle" style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>Projects</h2>
        <div>
          {renderedProjects}
        </div>
      </div>
    </div>
  )
};