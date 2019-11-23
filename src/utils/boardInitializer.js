const boardInitializer = () => {
  const squares = [];
  for (let i = 0; i < 8; i++) {
    squares.push([]);
    // add rest of black pieces
    if (i < 1) {
      for (let j = 0; j < 8; j++) {
        // add black rooks
        if (j === 0 || j === 7) {
          squares[i].push([i, j, '♜']);
        // add black bishops
        } else if (j === 1 || j === 6) {
          squares[i].push([i, j, '♝']);
        // add black knights
        } else if (j === 2 || j === 5) {
          squares[i].push([i, j, '♞']);
        // add black queen
        } else if (j === 3) {
          squares[i].push([i, j, '♛']);
        // add black king
        } else if (j === 4) {
          squares[i].push([i, j, '♚']);
        }
      }
    // add black pawns
    } else if (i < 2) {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, '♟']);
      }
    // add rest of the empty spaces
    } else if (i < 6) {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, null]);
      }
    // add white pawns
    } else if (i < 7) {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, '♙']);
      } 
    // add rest of white pieces
    } else if (i < 8) {
      for (let j = 0; j < 8; j++) {
        // add white rooks
        if (j === 0 || j === 7) {
          squares[i].push([i, j, '♖']);
        // add white bishops
        } else if (j === 1 || j === 6) {
          squares[i].push([i, j, '♗']);
        // add white knights
        } else if (j === 2 || j === 5) {
          squares[i].push([i, j, '♘']);
        // add white queen
        } else if (j === 3) {
          squares[i].push([i, j, '♕']);
        // add white king
        } else if (j === 4) {
          squares[i].push([i, j, '♔']);
        }
      }
    }
  }
  return squares;
}

export default boardInitializer;
