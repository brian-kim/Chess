import Pawn from '../Pieces/Pawn';

const pieceMover = (gameBoard, curSquare, newSquare) => {
  const curX = curSquare[1];
  const curY = curSquare[0];
  const curSquarePiece = curSquare[2];
  const newX = newSquare[1];
  const newY = newSquare[0];

  const invalidMoveMessage = () => alert('Not a valid move');

  //check movement of pawns
  if (curSquarePiece === 'wP' || curSquarePiece === 'bP') {
    if (Pawn.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  } 
  // check movement rooks
  
  // check movement bishops
  
  // check movement knight
  
  // check movement kings
  
  // check movement queens
  return gameBoard
}

export default pieceMover;
