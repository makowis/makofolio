/* eslint-env jest */
// @flow
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import person from './models/Person';

const reducer = () => ({ person, slide: { slides: [] } });

const store = createStore(reducer);

it('renders App', () => {
  const tree = renderer
    .create(
      <Provider {...{ store }}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
