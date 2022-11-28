import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Home () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/games');
    }

    return(
        <div className="home">
            <h1> Welcome to AATT Arcade App </h1>
            <br></br>
            <Button className="link-btn1" onClick={handleClick}>Get Gaming!</Button>
        </div>
    )
}