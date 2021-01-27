import React, {useState} from 'react';
import Axios from 'axios';
import Input from '../components/Input';
import {Link, navigate} from '@reach/router';

const Login = props => {
    const {setLogged} = props;

    const initialLogin = {
        email: "",
        password: ""
    }

    const [log, setLog] = useState(initialLogin);
    const [errors, setErrors] = useState(initialLogin);

    const handleInputChange = e => {
        setLog({
            ...log,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/login', log, {withCredentials: true})
            .then(res => {
                console.log(res);
                if(res.data.user){
                    setLogged(res.data.user);
                    navigate("/dashboard")
                }
                else{
                    console.log(res.data)
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit} className="col-5 mx-auto">
            <h2>Login</h2>
            <Input
                name="email"
                value={log.email}
                error={errors.email}
                handleChange={handleInputChange}
                label="Email: "
                type="email"
            />
            <Input
                name="password"
                value={log.password}
                error={errors.password}
                handleChange={handleInputChange}
                label="Password: "
                type="password"
            />
            <Input
                submitValue="Login"
                type="submit"
            />
            <br/>
            <Link to="/">Already have an account?</Link>
        </form>
    )
}

export default Login;