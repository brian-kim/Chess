export default class Knight {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    const xDif = Math.abs(newX - curX);
    const yDif = Math.abs(newY - curY);

    // check if piece is moving 2 spaces left/right and 1 space up/down
    if (xDif === 2 && yDif === 1) {
      return true;
    // check if piece is moving 2 spaces up/down and 1 space left/right
    } else if (yDif === 2 && xDif === 1) {
      return true;
    // piece didn't move or made invalid move
    } else {
      return false;
    }
  }
}