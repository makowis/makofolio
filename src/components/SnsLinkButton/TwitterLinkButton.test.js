/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toTwitterID } from '@makofolio/twitter/models/TwitterID';
import TwitterLinkButton from './TwitterLinkButton';

it('renders TwitterLinkButton', () => {
  const tree = renderer
    .create(<TwitterLinkButton twitterId={toTwitterID('mako_wis')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
