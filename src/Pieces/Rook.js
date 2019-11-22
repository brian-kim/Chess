export default class Rook {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    const xDif = newX - curX;
    const yDif = newY - curY;

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
        for (let i = 1; i < yDif; i++) {
          if (gameBoard[curY + i][curX][2] !== null) {
            return false;
          }
        }
        return true;
      }
    // piece moves horizontally
    } else if (yDif === 0) {
      // piece is moving left
      if (xDif < 0) {
        for (let i = -1; i > xDif; i--) {
          if (gameBoard[curY][curX + i][2] !== null) {
            return false;
          }
        }
        return true;
      // piece is moving right
      } else if (xDif > 0) {
        for (let i = 1; i < xDif; i++) {
          if (gameBoard[curY][curX + i][2] !== null) {
            return false;
          }
        }
        return true;
      }
    // piece didn't move or made invalid move
    } else {
      return false;
    }
  }
}