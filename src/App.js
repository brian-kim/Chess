import React from 'react';

import Board from './components/Board';
import ResetBoard from './components/ResetBoard';
import TitleHeader from './components/TitleHeader';

import boardInitializer from './utils/boardInitializer';
import pieceMover from './utils/pieceMover';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: boardInitializer(),
      hasClickedPiece: false,
      clickedSquare: null
    }
    this.boardClickHandler = this.boardClickHandler.bind(this);
    this.boardResetter = this.boardResetter.bind(this);
  }

  boardClickHandler(square) {
    if (!this.state.hasClickedPiece && square[2] !== null) {
      this.setState({
        hasClickedPiece: true,
        clickedSquare: square
      })
    } else if (this.state.hasClickedPiece) {
      this.setState({
        hasClickedPiece: false,
        clickedSquare: null
      })
      this.setState({
        gameBoard: pieceMover(this.state.gameBoard, this.state.clickedSquare, square)
      })
    }
  }

  boardResetter() {
    this.setState({
      gameBoard: boardInitializer(),
      hasClickedPiece: false,
      clickedSquare: null
    })
  }

  render() {
    return(
      <div>
        <TitleHeader />
        <Board board={this.state.gameBoard} selector={this.boardClickHandler} />
        <ResetBoard reset={this.boardResetter}/>
      </div>
    )
  }
}
