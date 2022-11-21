import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import Games from './Components/Games';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Arcade</Navbar.Brand>
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
                <NavDropdown.Item as={Link} to="/frogger">Frogger</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/games">
                  All Games
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/games" element={<Games/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<LogIn/>}></Route>
        </Routes>
      </div>
    </div>
  </BrowserRouter>

  );
}

export default App;
