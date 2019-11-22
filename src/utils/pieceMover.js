import Pawn from '../Pieces/pawn';

const pieceMover = (gameBoard, curSquare, newSquare) => {
  const curX = curSquare[1];
  const curY = curSquare[0];
  const curSquarePiece = curSquare[2];
  const newX = newSquare[1];
  const newY = newSquare[0];

  const invalidMoveMessage = () => alert('Not a valid move');

  switch(curSquarePiece) {
    case 'wP':
      if (Pawn.checkMove(gameBoard, curX, curY, newX, newY)) {
        gameBoard[newY][newX][2] = curSquarePiece;
        gameBoard[curY][curX][2] = null;
      } else {
        invalidMoveMessage();
      }
      break;
    case 'bP':
      if (Pawn.checkMove(gameBoard, curX, curY, newX, newY)) {
        gameBoard[newY][newX][2] = curSquarePiece;
        gameBoard[curY][curX][2] = null;
      } else {
        invalidMoveMessage();
      }
      break;
    // check movement rooks
    
    // check movement bishops
  
    // check movement knight
  
    // check movement kings
  
    // check movement queens

    default:
      console.log('pieceMover defaulted');
  }

  return gameBoard
}

export default pieceMover;
