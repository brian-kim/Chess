export default class Rook {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    const curSquarePiece = gameBoard[curY][curX][2];
    const xDif = newX - curX;
    const yDif = newY - curY;

    if (curSquarePiece === 'wR' || curSquarePiece === 'bR') {
      // piece moves vertically
      if (xDif === 0) {
        // piece moves up the board
        if (yDif < 0) {
          // checks all spaces up to new square to make sure it's not blocked
          for (let i = -1; i > yDif; i--) {
            if (gameBoard[curY + i][curX][2] !== null) {
              return false;
            }
          }
          return true;
        // piece moves down the board
        } else if (yDif > 0) {
          for (let i = 1; i < yDif - 1; i++) {
            if (gameBoard[curY + i][curX][2] !== null) {
              return false;
            }
          }
          return true;
        }
      // piece moves horizontally
      } else if (yDif === 0) {
        if (xDif < 0) {
          for (let i = -1; i > xDif; i--) {
            if (gameBoard[curY][curX + i][2] !== null) {
              return false;
            }
          }
          return true;
        } else if (xDif > 0) {
          for (let i = 1; i < xDif; i++) {
            if (gameBoard[curY][curX + i][2] !== null) {
              return false;
            }
          }
          return true;
        }
      // piece didn't move
      } else {
        return false;
      }
    }
  }
}