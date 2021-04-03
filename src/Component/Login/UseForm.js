import {useState, useEffect} from 'react'


const useForm = () => {
    // set up the value
    const[values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
    })
    // use the state for handle error
    const [errors, serErrors] = useState({})

    // create function when change the value then update
    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {handleChange, values};
}

export default useForm;