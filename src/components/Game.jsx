import React, { Component } from 'react';
import { inject, observer  } from 'mobx-react';
import Stage from './Stage';

@inject('GameStore')
@observer

class Game extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { GameStore } = this.props;

    return(
      <div style={{backgroundColor: 'blue'}}>
        <Stage stageKey={GameStore.currentStageKey}></Stage>
        <h2>{GameStore.playerPosition}</h2>
      </div>
    );
  }
}

export default Game;
