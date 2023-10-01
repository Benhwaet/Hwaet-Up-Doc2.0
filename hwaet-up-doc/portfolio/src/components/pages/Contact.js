import React, { useState } from "react";
import '../../styles/contact.css'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [username, setUsername] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'username') {
            setUsername(inputValue);
        } else if (inputType === 'pronouns') {
            setPronouns(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setComment(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !username) {
            alert('Username or email is invalid');
            return;
        }
        if (!comment) {
            alert('Please leave a comment or question');
            return;
        }

        alert(`Thank you for your comment, ${username}!`)
        
        console.log(username);
        console.log(pronouns);
        console.log(email);
        console.log(comment);

        setUsername('');
        setPronouns('');
        setEmail('');
        setComment('');
    }
    return (
        <div className="contactInfo" style={{ marginTop: "30px" }}>
                <h3 className="contact">Contact Me</h3>
            <div className="formContainer" style={{ display: "flex", justifyContent: "center"}}>
                <div className="formBlock" style={{ display: "flex", justifyContent: "center" }}>
                    <form className="mb-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div>
                        <input style={{ width: "65%", marginTop: "10px" }}
                            value={username}
                            name="username"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Username"
                            aria-label="Username"
                        />
                        <input style={{ marginLeft: "10px", width: "32%", marginTop: "10px" }}
                            value={pronouns}
                            name="pronouns"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Pronouns"
                            aria-label="Pronouns"
                        />
                        </div>
                        <input style={{ width: "100%", marginTop: "10px" }}
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                        />
                        <input className="commentInput" style={{ width: "100%", height: "200px", marginTop: "10px", marginBottom: "10px" }}
                            value={comment}
                            name="comment"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Comment"
                            as="Comment"
                            aria-label="Comment Text" />
                            <div style={{display:"flex", justifyContent:"center" }}>
                        <button style={{ width: "50%", marginTop: "10px" }}
                        onClick={handleFormSubmit} 
                        type="submit" 
                        class="btn btn-secondary">
                            Submit</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;