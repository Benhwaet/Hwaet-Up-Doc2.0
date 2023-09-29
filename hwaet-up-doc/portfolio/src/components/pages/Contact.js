import React from "react";
import { InputGroup, Form } from 'react-bootstrap';
import '../../styles/contact.css'

export default function Contact() {
    return (
        <div className="contactInfo" style={{ marginTop: "30px"}}>
            <section className="profiles">
                <h3 className="contact">Contact Me</h3>
            </section>
            <div className="formContainer" style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
                <div className="formBlock" style={{ width: "50%" }}>
                    <InputGroup className="mb-3">
                        <Form.Control style={{ width: "25%" }}
                            placeholder="Username"
                            aria-label="Username"
                        />
                        <Form.Control style={{ marginLeft: "10px", width: "5%" }}
                            placeholder="Pronouns"
                            aria-label="Pronouns"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                        />
                    </InputGroup>
                    <InputGroup style={{ height: "200px" }}>
                        <InputGroup.Text style={{ width: "120px", display: "flex", overflowBlock: "hidden" }}>Questions, <br></br> Comments?:</InputGroup.Text>
                        <Form.Control as="commentText" aria-label="Comment Text" />
                    </InputGroup>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}