import React, { useState } from 'react';
import Axios from 'axios';
import Input from '../components/Input';
import {Link, navigate} from '@reach/router'

const Reg = props => {
    const {setLogged} = props;

    const initialReg = {
        name: "",
        email: "",
        password: "",
        confirmPass: ""
    }
    const [reg, setReg] = useState(initialReg);
    const [errors, setErrors] = useState(initialReg)

    const handleInputChange = e => {
        setReg({
            ...reg,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/register', reg, {withCredentials: true})
            .then(res => {
                console.log(res);
                if(res.data.user){
                    setLogged(res.data.user);
                    navigate("/dashboard")
                }
                else{
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <Input
                name="name"
                value={reg.name}
                error={errors.name}
                handleChange={handleInputChange}
                label="Name: "
                type="text"
            />
            <Input
                name="email"
                value={reg.email}
                error={errors.email}
                handleChange={handleInputChange}
                label="Email: "
                type="email"
            />
            <Input
                name="password"
                value={reg.password}
                error={errors.password}
                handleChange={handleInputChange}
                label="Password: "
                type="password"
            />
            <Input
                name="confirmPass"
                value={reg.confirmPass}
                error={errors.confirmPass}
                handleChange={handleInputChange}
                label="Confirm Password: "
                type="password"
            />
            <Input
                submitValue="Register"
                type="submit"
            />
            <br/>
            <Link to="/login">Already have an account?</Link>
        </form>
    )
}

export default Reg