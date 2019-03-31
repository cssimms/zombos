import  React from 'react';
import { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('StageStore')
@observer
class Stage extends Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {

  }

  // Rendering and Getting Tiles
  getStageTiles() {
    const { StageStore } = this.props;
    const tileGrid = StageStore.currentTileGrid;
    return tileGrid;
  }

  renderRow(row) {
    return(row.map((tileValue, index) => {

      // hacky way to give player pos different css class
      // eventually will want to optimize this?
      // why re-render the whole page when it won't be
      // necessarily visible?
      if (tileValue === 'X') {
        return(
          <div className='stage__tile--player' key={index}>
            { tileValue }
          </div>
        )
      }

      // TODO - insert class name depending on type of tile?
      // might have something in constants/helper to map
      // tiletype -> actual tile class, etc.
      return(
        <div className='stage__tile' key={index}>
          { tileValue }
        </div>
      );
    }))
  }

  renderStageTiles() {
    const tiles = this.getStageTiles()
    return(tiles.map((row, index) => {
      return (
        <div className='stage__row' key={index}>
          { this.renderRow(row) }
        </div>
      );
    }));
  }

  render() {
    const { StageStore } = this.props

    return(
      <div
        className='stage'
        onKeyDown={StageStore.movePlayer}
        tabIndex='0'
      >
        {this.renderStageTiles()}
        {this.props.stageKey}
      </div>
    );
  }
}

export default Stage;
