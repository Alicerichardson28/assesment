import React from 'react'
import InputField from './InputField'


const LoginForm = () => {
    const [data, setData] = React.useState({});
    const handleChange = (name, value) => {
        setData(prev => ({...prev, [name]: value}))
    }
    return (
        <div>
            <form>
                <InputField 
                    name="fullName"
                    label="Full name"
                    onChange={handleChange}
                />
                <InputField 
                    name="password"
                    label="Password"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default LoginForm

