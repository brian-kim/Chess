import React from 'react';

import Rows from './Rows';

const Board = ({ selector }) => {
  const squares = [];
  for (let i = 0; i < 8; i++) {
    squares.push([]);
    for (let j = 0; j < 8; j++) {
      squares[i].push([i, j]);
    }
  }

  return(
    <div style={boardStyle}>{
      squares.map(row => {
        return <Rows row={row} selector={selector} />
      })
    }</div>
  )
}

const boardStyle = {
  display: 'table',
  margin: '0 auto',
}

export default Board;
