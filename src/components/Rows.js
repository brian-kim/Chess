import React from 'react';

import Squares from './Squares';

const Rows = ({ row, selector }) => {
  return(
    <div style={rowStyle}>{row.map(square => {
      return <Squares
        key={square}
        square={square}
        selector={selector}
      />
    })}
  </div>
  )
}

const rowStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export default Rows;
