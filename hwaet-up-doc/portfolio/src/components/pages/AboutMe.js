import React from 'react';
import '../../styles/about.css';
import avatar from '../../images/KingBugs.png';

export default function About() {
    return (
        <div className="default">
            <div className="bioContainer">
                <div className="profilePicture">
                    <img className="headshot" src={avatar} alt="Bugs Bunny pretending to be a king."
                        id="avatar" />
                    <figcaption>
                        "Hwæt. We Gardena in geardagum, þeodcyninga," <br></br><strong>Beowulf</strong><br></br>
                        "How we have heard of the might of the kings," <br></br>trans. George Walkden, Ph.D
                    </figcaption>
                </div>
                <h3 id="aboutme">Hwaet About Me?</h3>
                <div className="aboutme">
                    <h4>Seven Things About Ben</h4>
                    <p className="bio">
                        - Library Assistant to children by day, aspiring coder by night.
                        <br></br>
                        - Big fan of videogames, literature, RPGs, and interactive storytelling in general.Non-generally, loves sci-fi, fantasy, and worldbuilding.
                        <br></br>
                        - Currently learning HTML, CSS, JavaScript, and React via bootcamp.
                        <br></br>
                        - Has two mostly useless but fun B.A. degrees in Psychology and English Literatures.
                        <br></br>
                        - Would like to learn more about Python, C++, and C#.
                        <br></br>
                        - Dreams of restructuring library databases and classifying systems (also creating interactive fiction).
                        <br></br>
                        - Has always loved Bugs Bunny.
                    </p>
                </div>
            </div>
        </div>
    );
}