/* eslint-env jest */
// @flow
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Person from './Person';
import person from '../models/Person';

const reducer = () => ({ person });

const store = createStore(reducer);

it('renders Person Container', () => {
  const tree = renderer
    .create(
      <Provider {...{ store }}>
        <Person />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
