import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/Stage.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import GameStore from './stores/GameStore';
import StageStore from './stores/StageStore';

const Root = (
  <Provider
    GameStore={GameStore}
    StageStore={StageStore}
  >
    <App />
  </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
