/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import FacebookLinkButton from './FacebookLinkButton';

it('renders FacebookLinkButton', () => {
  const tree = renderer
    .create(<FacebookLinkButton facebookId="makoto.henmi" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
