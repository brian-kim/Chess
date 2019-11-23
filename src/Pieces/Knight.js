export default class Knight {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    const xDif = Math.abs(newX - curX);
    const yDif = Math.abs(newY - curY);

    if (xDif === 2 && yDif === 1) {
      return true;
    } else if (yDif === 2 && xDif === 1) {
      return true;
    } else {
      return false;
    }
  }
}