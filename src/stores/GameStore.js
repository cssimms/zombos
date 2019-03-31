import { observable, action, computed } from 'mobx';

class GameStore {
  // Obervables
  @observable turnCount = 0;
  // @observable playerPosition = Constants.startingPlayerPosition;
  // @observable currentStageKey = 'mainHall';

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
