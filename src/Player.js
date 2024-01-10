// src/Player.js/ with some styling to the cards

import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px', backgroundColor: 'black', color: 'white' }}>
            <Card.Img variant="top" src={imageUrl} alt={`${name} image`} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title style={{ color: 'darkred' }}>{name}</Card.Title>
                <Card.Text>
                    <p style={{ marginBottom: '5px' }}><span style={{ color: 'blue' }}>Team:</span> <span style={{ color: 'white' }}>{team}</span></p>
                    <p style={{ marginBottom: '5px' }}><span style={{ color: 'blue' }}>Nationality:</span> <span style={{ color: 'white' }}>{nationality}</span></p>
                    <p style={{ marginBottom: '5px' }}><span style={{ color: 'blue' }}>Jersey Number:</span> <span style={{ color: 'white' }}>{jerseyNumber}</span></p>
                    <p style={{ marginBottom: '5px' }}><span style={{ color: 'blue' }}>Age:</span> <span style={{ color: 'white' }}>{age}</span></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
// Defining the  default props for each player
Player.defaultProps = {
    name: 'Player Name',
    team: 'Team Name',
    nationality: 'Nationality',
    jerseyNumber: '00',
    age: '0',
    imageUrl: 'https://via.placeholder.com/150', // Default placeholder image URL
};

export default Player;