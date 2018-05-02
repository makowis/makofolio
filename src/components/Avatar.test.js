/* eslint-env jest */
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

it('renders Avatar', () => {
  const props = { src: 'http://example.com/hoge.png', alt: 'Example' };
  const tree = renderer.create(<Avatar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
