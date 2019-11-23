import Bishop from '../Pieces/Bishop';
import Knight from '../Pieces/Knight';
import Pawn from '../Pieces/Pawn';
import Rook from '../Pieces/Rook';

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
  // check movement rooks
  } else if (curSquarePiece === 'wR' || curSquarePiece === 'bR') {
    if (Rook.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  // check movement bishops
  } else if (curSquarePiece === 'wB' || curSquarePiece === 'bB') {
    if (Bishop.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  // check movement queens
  } else if (curSquarePiece === 'wQ' || curSquarePiece === 'bQ') {
    if (Rook.checkMove(gameBoard, curX, curY, newX, newY) || Bishop.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  // check movement knight
  } else if (curSquarePiece === 'wN' || curSquarePiece === 'bN') {
    if (Knight.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  }
  // check movement kings
  
  return gameBoard
}

export default pieceMover;
