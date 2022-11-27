import React from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CurrentUser } from './contexts/CurrentUser';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function Navigation() {

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <Nav>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/register">
                Sign Up
            </Nav.Link>
        </Nav>
    )

    if (currentUser) {
        loginActions = (
            <Nav>
                <Nav.Link as={Link} to="/profile">Logged in as { currentUser.username}</Nav.Link>
            </Nav>
        )
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/games">ATT App Arcade</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
              <NavDropdown title="Games" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/tictactoe">TicTacToe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hangman">
                  Hangman
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tetris">
                  Tetris
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/frogger">Frogger</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/games">
                  All Games
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
                {loginActions}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation;