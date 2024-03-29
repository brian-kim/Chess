import React from 'react';

const Squares = ({ square, selector }) => {
  let backgroundColor;
  const reduced = square[0] + square[1]
  reduced % 2 === 0 ? backgroundColor = 'lightGrey' : backgroundColor = 'grey';
  
  const squareStyle = {
    width: '60px',
    height: '60px',
    fontSize: '55px',
    backgroundColor: backgroundColor,
    border: '1px solid black',
    textAlign: 'center'
  }

  return(
    <div style={squareStyle} onClick={() => selector(square)}>{square[2]}</div>
  )
}


export default Squares;