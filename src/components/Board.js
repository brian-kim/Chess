import React from 'react';

import Rows from './Rows';

const Board = ({ board, selector }) => {
  return(
    <div style={boardStyle}>{
      board.map(row => {
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
