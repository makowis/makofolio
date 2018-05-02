/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
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

const url =
  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Fspeakerdeck.com%2Fmakowis.atom'&format=json";
const slidesPromise = axios
  .get(url)
  .then((res) => res.data.query.results.feed.entry);

slidesPromise.then((slides) =>
  store.dispatch({ type: 'CHANGE_SLIDES', slides }),
);

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
