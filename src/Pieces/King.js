export default class King {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    const xDif = Math.abs(newX - curX);
    const yDif = Math.abs(newY - curY);

    // check if piece is moving left or right 1 space
    if (xDif === 1 && yDif === 0) {
      return true;
    // check if piece is moving diagonally 1 space
    } else if (xDif === 1 && yDif === 1) {
      return true;
    // check if piece is moving up or down 1 space
    } else if (xDif === 0 && yDif === 1) {
      return true;
    // piece didn't move or made invalid move
    } else {
      return false;
    }
  }
}