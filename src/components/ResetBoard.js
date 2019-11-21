import React from 'react';

const ResetBoard = ({ reset }) => {
  return(
    <button style={buttonStyle} onClick={reset}>Reset</button>
  )
}

const buttonStyle = {
  margin: '15px auto',
  padding: '5px',
  display: 'flex',
}

export default ResetBoard;
