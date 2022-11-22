import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../App.css';

export default function Games () {
    return(
        <div>
            <h1> AATT Arcade </h1>
            <div className="wrapper">
            <Row xs={2} md={3} className="g-4">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>TicTacToe</Card.Title>
                            <Card.Text>
                                Simple game of X's and O's!
                            </Card.Text>
                            <Button variant="primary">Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Hangman</Card.Title>
                            <Card.Text>
                                Guess the word or phrase to save this man!
                            </Card.Text>
                            <Button variant="primary">Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Frogger</Card.Title>
                            <Card.Text>
                                Help Frogger get across safely!
                            </Card.Text>
                            <Button variant="primary">Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}