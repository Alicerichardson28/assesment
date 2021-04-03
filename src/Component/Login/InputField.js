import React, { useState } from 'react'

const InputField = (props) => {
    const [ value, setValue ] = React.useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
        props.onChange(e.target.name, e.target.value)
    }

    return (
        <div>
            <input
                placeholder={props.placeholder}
                name={props.name}
                onChange={(e) => handleChange()}
                type={props.type}
                value={props.value}
                autoComplete={props.autoComplete}
            />
        </div>
    )
}

// create default props 
InputField.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autoComplete: "off"
}


export default InputField
