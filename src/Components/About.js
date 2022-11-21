import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
//import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
//import Games from './Games';


export default function About () {
  return (
    <div>
        <Card>
        <Card.Header as="h5">About the Founders</Card.Header>
        <Card.Body>
            <Card.Title>Hey Gamers :D</Card.Title>
            <div className="about">
                <Card.Text>
                This app was designed by people like you! 
                Our inspiration for this project came from our collective love of web/computer games and gaming.  
                This is the best of our favorite retro and classic games.  
                We hope you enjoy our app!!
                </Card.Text>
            </div>
            <Button variant="primary">Get Gaming</Button>
        </Card.Body>
        </Card>
    </div>
  );
}