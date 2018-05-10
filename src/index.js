/* eslint-env browser */
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

ReactDOM.render(Application, document.getElementById('root'));
registerServiceWorker();
