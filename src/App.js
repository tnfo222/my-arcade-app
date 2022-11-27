import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import About from './Components/About';
import Store from './Components/Store';
import Games from './Components/Games';
import Login from './Components/LogIn';
import Profile from './Components/Profile';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import Hangman from './Components/Hangman/Hangman';
import Tetris from './Components/Tetris/src/app.js';
import Register from './Components/Register';
import Navigation from './Navigation'; 
import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/games" element={<Games/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/tictactoe" element={<TicTacToe/>}></Route>
          <Route path="/hangman" element={<Hangman/>}></Route>
          <Route path="/tetris" element={<Tetris/>}></Route>
        </Routes>
      </BrowserRouter>
  </CurrentUserProvider>  
  );
}

export default App;
