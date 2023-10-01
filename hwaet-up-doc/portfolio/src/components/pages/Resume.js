import React from "react";
import '../../styles/resume.css';

export default function Resume() {
    return (
        <div>
            <div className="resumeContainer" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                <div className="resumeTitle">
                    <h2>Resume</h2>
                </div>
                <div className="resume">
                   <iframe src="https://docs.google.com/document/d/e/2PACX-1vRJNe-uEFFCH0bXb7w5fT_sp49RabYlMa98ub9zx_Pmjj1buii5wsrtHcGO1ZXuwg/pub?embedded=true" 
                   style={{width: "800px", height: "1000px"}}></iframe>
                </div>
            </div>
        </div>
    )
}
