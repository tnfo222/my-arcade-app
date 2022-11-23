import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Register (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    }

    return(
        <div className="auth-form-container">
        <Form className="registerform" onSubmit={handleSubmit}>
            <h2>Sign Up for Arcade</h2>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control value={name} name="name" id="name" placeholder="Full Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" value={email}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control id="username" placeholder="New Username" name="password"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control id="password" placeholder="New Password" value={pass} onChange={(e) => setPass(e.target.value)} name="password"/>
            </Form.Group>
            <Button className="link-btn" type="submit" onClick={handleClick}>
                Submit
            </Button>
        </Form>
    </div>
  );
}