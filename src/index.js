/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnectedApp from './App';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { persons } from './models/Person';

const store = createStore(reducer);

const personId = window.location.pathname.substr(1);
const person = persons[personId];
if (person) {
  store.dispatch({ type: 'CHANGE_PERSON', person });
}

const Application = (
  <Provider {...{ store }}>
    <ConnectedApp />
  </Provider>
);

ReactDOM.render(Application, document.getElementById('root'));
registerServiceWorker();
