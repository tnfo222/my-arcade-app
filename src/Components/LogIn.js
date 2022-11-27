import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrentUser } from "../contexts/CurrentUser";

export default function Login () {

    const navigate = useNavigate();

    const {setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password:''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:3306/authentication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            navigate(`/`)
        } else {
            setErrorMessage(data.message)
        }
    }



    return(
        <div className="auth-form-container">
            <Form className="loginform" onSubmit={handleSubmit}>
            <h2>Welcome Back, Gamer :D</h2>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required value={credentials.email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} placeholder="Email" id="email" name="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={credentials.password} oonChange={e => setCredentials({ ...credentials, password: e.target.value })} placeholder="********" id="password" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button className="link-btn" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };