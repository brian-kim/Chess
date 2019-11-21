import React from 'react';

import Board from './components/Board';
import TitleHeader from './components/TitleHeader';

import boardInitializer from './utils/boardInitializer';
import boardUpdater from './utils/boardUpdater';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: boardInitializer()
    }
    this.boardClickHandler = this.boardClickHandler.bind(this);
  }

  boardClickHandler(square) {
    this.setState({
      gameBoard: boardUpdater(this.state.gameBoard, square)
    })
  }

  render() {
    return(
      <div>
        <TitleHeader />
        <Board selector={this.boardClickHandler} />
      </div>
    )
  }
}
