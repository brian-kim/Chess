import React from 'react';

const Squares = ({ square, selector }) => {
  let backgroundColor;
  const reduced = square.reduce((acc, curr) => acc + curr);
  reduced % 2 === 0 ? backgroundColor = 'lightGrey' : backgroundColor = 'grey';
  
  const squareStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: backgroundColor,
    border: '1px solid black',
    textAlign: 'center'
  }

  return(
    <div style={squareStyle} onClick={() => selector(square)}></div>
  )
}


export default Squares;