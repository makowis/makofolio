/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import TwitterLinkButton from './TwitterLinkButton';

it('renders TwitterLinkButton', () => {
  const tree = renderer
    .create(<TwitterLinkButton url="https://twitter.com/mako_wis" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
