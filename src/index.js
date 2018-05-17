/* eslint-env browser */
// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import ConnectedApp from './App';
import DevTools from './containers/DevTools';
import registerServiceWorker from './registerServiceWorker';
import { setupHistoryHandler } from './history';

const store = configureStore();
setupHistoryHandler(store);

const Application = (
  <Provider {...{ store }}>
    <div>
      <ConnectedApp />
      <DevTools />
    </div>
  </Provider>
);
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(Application, root);
} else {
  throw new Error('id="root"が設定された要素が見つかりません');
}
registerServiceWorker();
