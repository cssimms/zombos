import { observable, action, computed } from 'mobx';
import Constants from '../utils/Constants';

class GameStore {
  // Obervables
  @observable count = 0;
  @observable playerPosition = Constants.startingPlayerPosition;
  @observable currentStageKey = 'mainHall';

  // Actions
  @action test = () => {

  }

  // Computed
  @computed get value() {

    return ''
  }
}

const store = new GameStore();
export default store;
