import React from 'react';
import Card from 'react-bootstrap/Card';
import "../App.css";

export default function Store () {
    return(
        <div>
            <h1>Welcome to the Store!</h1>
            <div className='storewrap'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbWluZyUyMHNvb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                    <Card.Title>Store Coming Soon!</Card.Title>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}
