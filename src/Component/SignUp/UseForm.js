import React,{ useState, useEffect } from 'react'


const useForm = (callback, validate) => {
    // set up the value
    const[values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
    })
    // use the state for handle error
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    // create function when change the value then update
    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    // create handle submit function, prevent default pages to not keep refreshing 
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values))
        setIsSubmitting(true)
    };

    // will show the errors if user do not put anything, do not allow users sign up till fill all information
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    },[errors]);
    return {handleChange, values, handleSubmit, errors};
}

export default useForm;