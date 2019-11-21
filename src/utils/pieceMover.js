const pieceMover = (gameBoard, curSquare, newSquare) => {
  const curX = curSquare[1];
  const curY = curSquare[0];
  const curPiece = curSquare[2];
  const newX = newSquare[1];
  const newY = newSquare[0];
  if (curPiece === 'P') {
    if (newX - curX === 0 && newY - curY === -1) {
      gameBoard[newY][newX][2] = curPiece;
      gameBoard[curY][curX][2] = null;
    } else {
      alert('Not a valid move');
    }
  }
  return gameBoard
}

export default pieceMover;