const boardInitializer = () => {
  const squares = [];
  for (let i = 0; i < 8; i++) {
    squares.push([]);
    if (i === 6) {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, 'P']);
      }
    } else {
      for (let j = 0; j < 8; j++) {
        squares[i].push([i, j, null]);
      }
    }
  }
  return squares;
}

export default boardInitializer;
