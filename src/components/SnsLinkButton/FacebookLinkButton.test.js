/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toFacebookID } from '@makofolio/facebook/models/FacebookID';
import FacebookLinkButton from './FacebookLinkButton';

it('renders FacebookLinkButton', () => {
  const tree = renderer
    .create(<FacebookLinkButton facebookId={toFacebookID('makoto.henmi')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
