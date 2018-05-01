/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import ConnectedApp from './App';
import DevTools from './containers/DevTools';
import registerServiceWorker from './registerServiceWorker';
import { persons } from './models/Person';

const store = configureStore();

const personId = window.location.pathname.substr(1);
const person = persons[personId];
if (person) {
  store.dispatch({ type: 'CHANGE_PERSON', person });
}

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
