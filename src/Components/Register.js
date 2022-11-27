import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Register () {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3306/user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        navigate('/user')
    }

    return(
        <div className="auth-form-container">
        <Form className="registerform" onSubmit={handleSubmit}>
            <h2>Sign Up for Arcade</h2>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Preferred Name</Form.Label>
                <Form.Control required value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} name="name" id="name" placeholder="Preferred Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required id="email" name="email" onChange={e => setUser({ ...user, email: e.target.value })} placeholder="Enter email" value={user.email}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control required id="username" placeholder="New Username" name="username" onChange={e => setUser({ ...user, username: e.target.value })} value={user.username}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" id="password" placeholder="New Password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} name="password"/>
            </Form.Group>
            <Button className="link-btn" type="submit">
                Register
            </Button>
        </Form>
    </div>
  );
}