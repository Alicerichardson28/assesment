import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    // create submit function and set equal to true
    const submitForm = () => {
        setIsSubmitted(true)
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">X</span>
                <div className="form-content-left">
                    <img className="form-img" src="img/img-2.svg" alt="spaceship"/>
                </div>
                {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess/>}
            </div>
        </>
    )
}

export default Form
