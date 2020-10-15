import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // This clears the input fields on the component load: { name: '', email: '', message: '' }
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    // notice the console log is OUTSIDE the handleChange function because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync.  However, when we place the console.log in the scope of teh ContactForm function, we can see that the state is updated properly.
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>

                {/* the statement below means if(errorMessage)... */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;