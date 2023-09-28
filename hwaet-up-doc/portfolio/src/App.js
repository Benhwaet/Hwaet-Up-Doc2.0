
import React from 'react';
import NavHeader from './components/NavHeader';
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
      <About/>
      {/* <Projects/>
      <Contact/>
      <Form/>
      <Resume/> */}
    </div>
  );
}

export default Portfolio;
