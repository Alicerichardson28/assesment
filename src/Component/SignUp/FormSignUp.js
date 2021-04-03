import React from 'react'
import useForm from './UseForm'
import validateSignUP from './validateInfoSignUp'
import './Form.css'

const FormSignUp = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm, 
        validateSignUP
        );

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign-Up</h1>
                <div className="form-inputs">
                    <label htmlFor="fullName" className="form-label">
                        Full Name
                    </label>
                        <input 
                            id='fullName'
                            type="text" 
                            name="fullName"
                            className="form-input"
                            placeholder="Enter your full name"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <p>{errors.fullName}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                        <input 
                            id='email'
                            type="email" 
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                        <input 
                            id='password'
                            type="password" 
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn"type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already registered? 
                    <a href="#">sign-in</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp
