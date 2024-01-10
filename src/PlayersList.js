// src/PlayersList.js/ the display is in form of a grid and 5 players per row
import React from 'react';
import Player from './Player';
import playersData from './players';

const PlayersList = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', justifyContent: 'center' }}>
            {playersData.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;