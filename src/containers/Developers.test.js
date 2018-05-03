/* eslint-env jest */
// @flow
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Developers from './Developers';

const reducer = () => ({});

const store = createStore(reducer);

it('renders Person Developers', () => {
  const tree = renderer
    .create(
      <Provider {...{ store }}>
        <Developers />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
