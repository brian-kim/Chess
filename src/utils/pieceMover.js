import Bishop from '../Pieces/Bishop';
import King from '../Pieces/King';
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
    // queen movement is a combination of rook and bishop movements so if either return true, then the move was valid
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
  // check movement kings
  } else if (curSquarePiece === 'wK' || curSquarePiece === 'bK') {
    if (King.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  }
  return gameBoard
}

export default pieceMover;
