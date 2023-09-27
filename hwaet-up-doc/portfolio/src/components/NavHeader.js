import React from 'react';

//import { Link } from "react-router-dom";
import '../style.css';

export default function NavHeader() {
    return (
        <>
        <header>
            <h1 class="myName">BenHwaet</h1>
            <nav>
                <ul class="navigation">
                    <li class="list"><a href="#about">Hwaet About Me?</a></li>
                    <li class="list"><a href="#projects">Projects</a></li>
                    <li class="list"><a href="#contact">Contact</a></li>
                    <li class="list"><a href="#form">Hwaet About You?</a></li>
                </ul>
            </nav>
        </header>
      </>
    );
  }

  