import Bishop from '../Pieces/Bishop';
import King from '../Pieces/King';
import Knight from '../Pieces/Knight';
import Pawn from '../Pieces/Pawn';
import Queen from '../Pieces/Queen';
import Rook from '../Pieces/Rook';

const isValidMove = (gameBoard, curSquare, newSquare, isWhitesTurn) => {
  const curX = curSquare[1];
  const curY = curSquare[0];
  const curSquarePiece = curSquare[2];
  const newX = newSquare[1];
  const newY = newSquare[0];

  if (isWhitesTurn) {
    // check movement of pawns
    if (curSquarePiece === '♙') {
      return Pawn.checkMove(gameBoard, curX, curY, newX, newY);
    } else if (curSquarePiece === '♖') {
      return Rook.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement bishops
    } else if (curSquarePiece === '♗') {
      return Bishop.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement queens
    } else if (curSquarePiece === '♕') {
      return Queen.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement knight
    } else if (curSquarePiece === '♘') {
      return Knight.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement kings
    } else if (curSquarePiece === '♔') {
      return King.checkMove(gameBoard, curX, curY, newX, newY);
    }
  } else {
    // check movement of pawns
    if (curSquarePiece === '♟') {
      return Pawn.checkMove(gameBoard, curX, curY, newX, newY);
    } else if (curSquarePiece === '♜') {
      return Rook.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement bishops
    } else if (curSquarePiece === '♝') {
      return Bishop.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement queens
    } else if (curSquarePiece === '♛') {
      return Queen.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement knight
    } else if (curSquarePiece === '♞') {
      return Knight.checkMove(gameBoard, curX, curY, newX, newY);
    // check movement kings
    } else if (curSquarePiece === '♚') {
      return King.checkMove(gameBoard, curX, curY, newX, newY);
    }
  }
  return false;
}

export default isValidMove;
