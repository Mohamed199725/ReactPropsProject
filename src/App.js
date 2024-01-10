// src/App.js/ this is the root component for the app that will render the content of the app
import React from 'react';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: 'red', fontFamily: 'Arial, sans-serif', fontSize: '3.5em',marginBottom: '40px' }}>All NBA 1st team</h1>
      <PlayersList />
    </div>
  );
}

export default App;