const pieceMover = (gameBoard, curSquare, newSquare) => {
  const curX = curSquare[1];
  const curY = curSquare[0];
  const curSquarePiece = curSquare[2];
  const newX = newSquare[1];
  const newY = newSquare[0];

  // if white pawn makes it to top row, turns into queen
  if (curSquarePiece === '♙' && newY === 0) {
    gameBoard[newY][newX][2] = '♕';
    gameBoard[curY][curX][2] = null;
  // if black pawn makes it to bottom row, turns into queen
  } else if (curSquarePiece === '♟' && newY === 7) {
    gameBoard[newY][newX][2] = '♛';
    gameBoard[curY][curX][2] = null;
  // any other piece movement moves normally
  } else {
    gameBoard[newY][newX][2] = curSquarePiece;
    gameBoard[curY][curX][2] = null;
  }
  return gameBoard
}

export default pieceMover;
