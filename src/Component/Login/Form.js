import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    // create submit function and set equal to true
    const submitForm = () => {
        setIsSubmitted(true)
    }
    return (
        <div>
            {/* {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess/>} */}
            <FormSuccess />
        </div>
    )
}

export default Form
