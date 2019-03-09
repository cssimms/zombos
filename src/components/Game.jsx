import React, { Component } from 'react';
import { observer  } from 'mobx-react';

@observer
class Game extends Component {

  render() {
    return(
      <div style={{backgroundColor: 'blue'}}>
        GAME?
      </div>
    );
  }
}

export default Game;
