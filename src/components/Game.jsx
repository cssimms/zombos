import React, { Component } from 'react';
import { inject, observer  } from 'mobx-react';
import Stage from './Stage';

@inject('GameStore')
@observer
class Game extends Component {

  componentDidMount() {
    this.triggerGameLoop()
  }

  triggerGameLoop() {

  }

  render() {
    const { GameStore } = this.props;

    return(
      <div >
        <Stage stageKey={GameStore.currentStageKey}></Stage>
      </div>
    );
  }
}

export default Game;
