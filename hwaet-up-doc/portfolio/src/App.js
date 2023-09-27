
import React from 'react';
import './style.css';
import NavHeader from './components/NavHeader';
import Avatar from './components/Avatar';
import About from './components/AboutMe';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Form from './components/Form';
// import Resume from './components/Resume';
// import Footer from './components/Footer';

function Portfolio() {
  return (
    <div className="body">
      <NavHeader/>
      <Avatar style={{ width: "400px"}}/>
      <About/>
      {/* <Projects/>
      <Contact/>
      <Form/>
      <Resume/> */}
    </div>
  );
}

export default Portfolio;
