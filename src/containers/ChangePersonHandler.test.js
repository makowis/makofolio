/* eslint-env jest */
// @flow
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Component } from './ChangePersonHandler';
import person from '../models/Person';

const reducer = () => ({ person: {}, slides: [] });

const store = createStore(reducer);

it('renders Person Developers', () => {
  const tree = renderer
    .create(
      <Provider {...{ store }}>
        <Component
          onChangePerson={() => Promise.resolve(undefined)}
          person={person}
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
