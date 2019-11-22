export default class Bishop {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    const xDif = newX - curX;
    const yDif = newY - curY;

    // check if piece is moving diagonally from top left to bottom right
    if (xDif - yDif === 0) {
      // piece is moving to top left
      if (xDif < 0) {
        // checks all spaces up to new square to make sure it's not blocked
        for (let i = -1; i > xDif; i--) {
          if (gameBoard[curY + i][curX + i][2] !== null) {
            return false;
          }
        }
        return true;
      // piece is moving to bottom right
      } else if (xDif > 0) {
        for (let i = 1; i < xDif; i++) {
          if (gameBoard[curY + i][curX + i][2] !== null) {
            return false;
          }
        }
        return true;
      }
    // check if piece is moving diagonally from bottom left to top right
    } else if (xDif + yDif === 0) {
      // piece is moving to bottom left
      if (xDif < 0) {
        for (let i = -1; i > xDif; i--) {
          if (gameBoard[curY - i][curX + i][2] !== null) {
            return false;
          }
        }
        return true;
      // piece is moving to top right
      } else if (xDif > 0) {
        for (let i = 1; i < xDif; i++) {
          if (gameBoard[curY - i][curX + i][2] !== null) {
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