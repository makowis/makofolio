/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import FacebookLinkButton from './FacebookLinkButton';

it('renders FacebookLinkButton', () => {
  const tree = renderer
    .create(<FacebookLinkButton url="http://www.facebook.com/makoto.henmi" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
