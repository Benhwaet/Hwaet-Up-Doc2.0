import React from "react";
import "../../styles/header-footer.css";

export default function Footer() {
    return (
        <>
        <footer style={{display: "flex", flexDirection: "column"}}>
        <div className="contactInfo" style={{marginTop: "30px"}}>
        <section className="profiles">
            <ul className="contactlinks" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", listStyle: "none", flexBasis:"30%" }}>
                <li className="contactlist"><a href="benhwaet@gmail.com">benhwaet@gmail.com</a></li>
                <li className="contactlist"><a href="https://github.com/Benhwaet">GitHub</a></li>
                <li className="contactlist"><a href="https://account.xbox.com/en-CA/Profile?xr=mebarnav">Xbox</a></li>
                <li className="contactlist"><a href="https://steamcommunity.com/profiles/76561198029613584/">Steam</a></li>
            </ul>
        </section>
        </div>
            <h4>That's all folks! Thanks for stopping by &copy; 2023 BenHwaet
            </h4>
        </footer>
        </>
    )
}