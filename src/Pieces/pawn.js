export default class Pawn {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    const curSquarePiece = gameBoard[curY][curX][2];
    const newSquarePiece = gameBoard[newY][newX][2];
    const xDif = Math.abs(newX - curX);
    const yDif = newY - curY;
    
    // white piece logic
    if (curSquarePiece === '♙') {
      // check if white pawn hasn't been moved yet and moving 2 spaces
      if (xDif === 0 && curY === 6 && yDif === -2) {
        // check both spaces ahead to see if empty
        for (let i = 1; i < 3; i++) {
          if (gameBoard[curY - i][curX][2] !== null) {
            return false;
          }
        }
        return true;
      // white pawn can move 1 space forward if empty
      } else if (xDif === 0 && yDif === -1 && newSquarePiece === null) {
        return true;
      // white pawn can move diagonally forward if not empty
      } else if (xDif === 1 && yDif === -1 && newSquarePiece !== null) {
        return true;
      }
    // black piece logic
    } else if (curSquarePiece === '♟') {
      if (xDif === 0 && curY === 1 && yDif === 2) {
        for (let i = 1; i < 3; i++) {
          if (gameBoard[curY + i][curX][2] !== null) {
            return false;
          }
        }
        return true;
      } else if (xDif === 0 && yDif === 1 && newSquarePiece === null) {
        return true;
      } else if (xDif === 1 && yDif === 1 && newSquarePiece !== null) {
        return true;
      }
    // if white or black pawns do any other move it is and invalid move
    } else {
      return false;
    }
  }
}