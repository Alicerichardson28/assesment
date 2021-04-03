export default function validateInfo(values) {
    let errors = {}

    // handle error from Full name
    if(!values.fullName.trim()) {
        errors.fullName = "Full name required"
    }

    //  handle error from Email
    if(!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    //  handle error from Password
    if(!values.password) {
        errors.password = 'Password id required'
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }
    
    return errors;
}