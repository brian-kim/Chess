import Rook from './Rook';
import Bishop from './Bishop';

export default class Queen {
  static checkMove(gameBoard, curX, curY, newX, newY) {
    if (Rook.checkMove(gameBoard, curX, curY, newX, newY) || Bishop.checkMove(gameBoard, curX, curY, newX, newY)) {
      return true;
    } else {
      return false;
    }
  }
}