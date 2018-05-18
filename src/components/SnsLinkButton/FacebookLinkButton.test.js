/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import FacebookLinkButton from './FacebookLinkButton';
import { toFacebookID } from '../../facebook/models/FacebookID';

it('renders FacebookLinkButton', () => {
  const tree = renderer
    .create(<FacebookLinkButton facebookId={toFacebookID('makoto.henmi')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
