import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

export default function Register (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="wrapper">
        <h1>Sign Up for Arcade</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName"/>
            <Form.Label>Full Name</Form.Label>
            <Form.Control value={name} name="name" id="name" placeholder="Full Name"/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" value={email}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control id="username" placeholder="New Username" name="password"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control id="password" placeholder="New Password" value={pass} onChange={(e) => setPass(e.target.value)} name="password"/>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Submit
        </Button>
    </Form>
    </div>
  );
}