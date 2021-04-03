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
                <label>FullName</label>
                <InputField 
                    name="fullName"
                    label="Full name"
                    onChange={handleChange}
                />
                <label>Password</label>
                <InputField 
                    name="password"
                    label="Password"
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm

