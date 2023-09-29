import React from 'react';
import '../styles/header-footer.css'
//import { Link } from "react-router-dom";

function Header({currentPage, handlePageChange}) {
    return (
        <>
        <header style={{marginTop: "30px"}}>
            <h1 className="myName">BenHwaet</h1>
            <nav>
                <ul className="navigation nav">
                    <li class="list"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}>
                        <a href="#about">Hwaet About Me?</a>
                        </li>
                    <li class="list"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link-active' : 'nav-link'}>
                        <a href="#projects">Projects</a></li>
                    <li class="list"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}>
                        <a href="#contact">Contact</a></li>
                    <li class="list"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>
                        <a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
      </>
    );
  }

  export default Header;