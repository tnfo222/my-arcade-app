import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


export default function Login ({setToken}) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          pass
        });
        setToken(token);
      }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/profile');
    }

    return(
        <div className="auth-form-container">
            <Form className="loginform" onSubmit={handleSubmit}>
            <h2>Welcome Back, Gamer :D</h2>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email" name="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} placeholder="********" id="password" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button className="link-btn" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };