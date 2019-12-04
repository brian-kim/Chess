import React from 'react';

const WhosTurn = ({ turn }) => {
  let playerTurn = turn ? `white's turn` : `black's turn`;
  return(
    <div style={playerTurnStyle}>{playerTurn}</div>
  )
}

const playerTurnStyle = {
  textAlign: 'center',
  fontFamily: 'Arial',
  fontSize: '25px',
  marginBottom: '10px'
}

export default WhosTurn;