import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Games () {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/tictactoe');
    }
    const handleClick2 = () => {
        navigate('/hangman');
    }
    const handleClick3 = () => {
        navigate('/tetris');
    }

    return(
        <div>
            <h1> AATT Arcade </h1>
            <div className="wrapper">
            <Row xs={2} md={3} className="g-4">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media2.giphy.com/media/ChzovjKPuEiYe8ePih/200w.webp?cid=ecf05e47v2hx8a4m9r635smi9rq2q1ctowk1l4qru927flz4&rid=200w.webp&ct=g" />
                        <Card.Body>
                            <Card.Title>TicTacToe</Card.Title>
                            <Card.Text>
                                Simple game of X's and O's!
                            </Card.Text>
                            <Button variant="primary" onClick={handleClick1} >Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media2.giphy.com/media/f7STAwvEml1eIf0FEq/200w.webp?cid=ecf05e47ul8cicsa24fqo4n4peyacwaz1vwtn8sv0gkm68ft&rid=200w.webp&ct=g" />
                        <Card.Body>
                            <Card.Title>Tetris</Card.Title>
                            <Card.Text>
                                The original block game!
                            </Card.Text>
                            <Button variant="primary" onClick={handleClick3}>Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media1.giphy.com/media/PHWTbRJiLO9VR0Ba33/200w.webp?cid=ecf05e47l2xn4w1xg1hudjd6wq3qrr5bp9c227g9fjkkufgf&rid=200w.webp&ct=g" />
                        <Card.Body>
                            <Card.Title>Frogger</Card.Title>
                            <Card.Text>
                                Help Frogger get across safely!
                            </Card.Text>
                            <Button variant="primary">Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media3.giphy.com/media/12BJdh2M9SwciQ/200.webp?cid=ecf05e47wthokm9x506c8z5eyizrygb5j10sp72ai0bwpw8e&rid=200.webp&ct=g" />
                        <Card.Body>
                            <Card.Title>Hangman</Card.Title>
                            <Card.Text>
                                Guess the word in time!
                            </Card.Text>
                            <Button variant="primary" onClick={handleClick2}>Play</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}