import { useState } from 'react';
import {validateEmail } from '../utils/helpers';



function Contact() {
    const [email, setEmail] = useState('');
    const [name, setname] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setname(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name || !message) {
            setErrorMessage('Email is invalid or a field was left blank');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        alert(`Hello ${name}`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setname('');
        setMessage('');
        setEmail('');
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2 className="fw-bold mb-1">Contact Me</h2>
                    
                    <br></br>
                    <form onSubmit={handleFormSubmit}>
                    
                        <div className="form-group">
                            <label htmlFor="search">Name:</label>
                            <input
                                
                                onChange={handleInputChange}
                                value={name}
                                name="name"
                                type="text"
                                className="form-control"
                                id="search"
                            />
                            <br />

                            <label htmlFor="search">Email:</label>
                            <input
                                
                                onChange={handleInputChange}
                                value={email}
                                name="email"
                                type="text"
                                className="form-control"
                                id="search"
                            
                            />
                            <br />

                            <label htmlFor="search">Message:</label>
                            <input
                                
                                onChange={handleInputChange}
                                value={message}
                                name="message"
                                type="text"
                                className="form-control"
                                id="search"
                            />
                            <br />

                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>


        </>
    );
}

export default Contact;