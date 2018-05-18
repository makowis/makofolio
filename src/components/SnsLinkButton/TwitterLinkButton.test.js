/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import TwitterLinkButton from './TwitterLinkButton';
import { toTwitterID } from '../../twitter/models/TwitterID';

it('renders TwitterLinkButton', () => {
  const tree = renderer
    .create(<TwitterLinkButton twitterId={toTwitterID('mako_wis')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
