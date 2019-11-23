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

  // check movement of pawns
  if (curSquarePiece === '♙' || curSquarePiece === '♟') {
    if (Pawn.checkMove(gameBoard, curX, curY, newX, newY)) {
      // if white pawn makes it to top row, turns into queen
      if (newY === 0) {
        gameBoard[newY][newX][2] = '♕';
        gameBoard[curY][curX][2] = null;
      // if black pawn makes it to bottom row, turns into queen
      } else if (newY === 7) {
        gameBoard[newY][newX][2] = '♛';
        gameBoard[curY][curX][2] = null;
      // otherwise move pawn like normal
      } else {
        gameBoard[newY][newX][2] = curSquarePiece;
        gameBoard[curY][curX][2] = null;
      }
    } else {
      invalidMoveMessage();
    }
  // check movement rooks
  } else if (curSquarePiece === '♖' || curSquarePiece === '♜') {
    if (Rook.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  // check movement bishops
  } else if (curSquarePiece === '♗' || curSquarePiece === '♝') {
    if (Bishop.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  // check movement queens
  } else if (curSquarePiece === '♕' || curSquarePiece === '♛') {
    // queen movement is a combination of rook and bishop movements so if either return true, then the move was valid
    if (Rook.checkMove(gameBoard, curX, curY, newX, newY) || Bishop.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  // check movement knight
  } else if (curSquarePiece === '♘' || curSquarePiece === '♞') {
    if (Knight.checkMove(gameBoard, curX, curY, newX, newY)) {
      gameBoard[newY][newX][2] = curSquarePiece;
      gameBoard[curY][curX][2] = null;
    } else {
      invalidMoveMessage();
    }
  // check movement kings
  } else if (curSquarePiece === '♔' || curSquarePiece === '♚') {
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
