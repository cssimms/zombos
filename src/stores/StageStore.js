import { observable, computed, action } from "mobx";
import Constants from "../utils/Constants";
import StageDimensions from "../utils/StageDimensions";

class StageStore {
  // Observable
  @observable currentStageKey = 'mainHall';
  @observable playerPosition = Constants.startingPlayerPosition;

  // Actions
  @action.bound
  movePlayer(keyPressEvent) {
    const oldPos = this.playerPosition
    console.log(keyPressEvent.key)
    switch (keyPressEvent.key) {
      case 'w':
        this.playerPosition = [ oldPos[0], oldPos[0] - 1 ]
        break;
      case 'a':
        this.playerPosition = [ oldPos[0] - 1, oldPos[0] ]
        break;
      case 's':
        this.playerPosition = [ oldPos[0], oldPos[0] + 1]
        break;
      case 'd':
        this.playerPosition = [ oldPos[0] + 1, oldPos[0] ]
        break;
      default:
    }
  }

  // Computed
  @computed get currentTileGrid() {
    const baseGrid = StageDimensions[this.currentStageKey]
    const mapGrid = this.insertPlayerPos(baseGrid, this.playerPosition)
    return mapGrid;
  }

  // helpers -- move to seperate file later
  insertPlayerPos(blankGrid, playerPos) {
    blankGrid[playerPos[0]][playerPos[1]] = 'X'
    return blankGrid;
  }

}

const store = new StageStore();
export default store;
