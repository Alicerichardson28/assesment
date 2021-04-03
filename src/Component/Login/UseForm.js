import { useState } from 'react'


const useForm = (validate) => {
    // set up the value
    const[values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
    })
    // use the state for handle error
    const [errors, setErrors] = useState({})

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
    }
    return {handleChange, values, handleSubmit, errors};
}

export default useForm;