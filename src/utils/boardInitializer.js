const boardInitializer = () => {
  const squares = [];
  for (let i = 0; i < 8; i++) {
    squares.push([]);
    // add rest of black pieces
    if (i < 1) {
      for (let j = 0; j < 8; j++) {
        // add black rooks
        if (j === 0 || j === 7) {
          squares[i].push([i, j, 'bR']);
        // add black bishops
        } else if (j === 1 || j === 6) {
          squares[i].push([i, j, 'bB']);
        // add black knights
        } else if (j === 2 || j === 5) {
          squares[i].push([i, j, 'bN']);
        // add black queen
        } else if (j === 3) {
          squares[i].push([i, j, 'bQ']);
        // add black king
        } else if (j === 4) {
          squares[i].push([i, j, 'bK']);
        }
      }
    // add black pawns
    } else if (i < 2) {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, 'bP']);
      }
    // add rest of the empty spaces
    } else if (i < 6) {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, null]);
      }
    // add white pawns
    } else if (i < 7) {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, 'wP']);
      } 
    // add rest of white pieces
    } else if (i < 8) {
      for (let j = 0; j < 8; j++) {
        // add white rooks
        if (j === 0 || j === 7) {
          squares[i].push([i, j, 'wR']);
        // add white bishops
        } else if (j === 1 || j === 6) {
          squares[i].push([i, j, 'wB']);
        // add white knights
        } else if (j === 2 || j === 5) {
          squares[i].push([i, j, 'wN']);
        // add white queen
        } else if (j === 3) {
          squares[i].push([i, j, 'wQ']);
        // add white king
        } else if (j === 4) {
          squares[i].push([i, j, 'wK']);
        }
      }
    }
  }
  return squares;
}

export default boardInitializer;
