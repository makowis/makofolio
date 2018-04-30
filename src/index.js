/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnectedApp from './App';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
const Application = (
  <Provider {...{ store }}>
    <ConnectedApp />
  </Provider>
);

ReactDOM.render(Application, document.getElementById('root'));
registerServiceWorker();
