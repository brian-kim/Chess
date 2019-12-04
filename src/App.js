import React from 'react';

import Board from './components/Board';
import ResetBoard from './components/ResetBoard';
import TitleHeader from './components/TitleHeader';
import WhosTurn from './components/WhosTurn';

import boardInitializer from './utils/boardInitializer';
import pieceMover from './utils/pieceMover';
import isValidMove from './utils/isValidMove';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: boardInitializer(),
      hasClickedPiece: false,
      clickedSquare: null,
      isWhitesTurn: true,
    }
    this.boardClickHandler = this.boardClickHandler.bind(this);
    this.boardResetter = this.boardResetter.bind(this);
  }

  boardClickHandler(square) {
    const { gameBoard, hasClickedPiece, clickedSquare, isWhitesTurn } = this.state;
    if (!hasClickedPiece && square[2] !== null) {
      this.setState({
        hasClickedPiece: true,
        clickedSquare: square
      })
    } else if (hasClickedPiece) {
      if (isValidMove(gameBoard, clickedSquare, square, isWhitesTurn)) {
        this.setState({
          gameBoard: pieceMover(gameBoard, clickedSquare, square),
          hasClickedPiece: false,
          clickedSquare: null,
          isWhitesTurn: !isWhitesTurn,
        })
      } else {
        alert('Not a valid move. Please make another move.');
        this.setState({
          hasClickedPiece: false,
          clickedSquare: null
        })
      }
    }
  }

  boardResetter() {
    this.setState({
      gameBoard: boardInitializer(),
      hasClickedPiece: false,
      clickedSquare: null,
      isWhitesTurn: true
    })
  }

  render() {
    const { gameBoard, isWhitesTurn } = this.state;
    return(
      <div>
        <TitleHeader />
        <WhosTurn turn={isWhitesTurn} />
        <Board board={gameBoard} selector={this.boardClickHandler} />
        <ResetBoard reset={this.boardResetter}/>
      </div>
    )
  }
}
