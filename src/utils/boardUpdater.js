const boardUpdater = (gameBoard, squareCoordinate) => {
  const xCoord = squareCoordinate[1];
  const yCoord = squareCoordinate[0];
  const updatedBoard = gameBoard;
  updatedBoard[yCoord][xCoord]++;
  return updatedBoard;
}

export default boardUpdater;