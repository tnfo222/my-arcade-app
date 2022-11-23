import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

export default function Login (props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
                <Button className="link-btn" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}