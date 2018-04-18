/* eslint-disable react/prop-types */
// @flow
import React from 'react';
import BaseButton from './BaseButton';

const GithubLinkButton = (props: { url: string }) => {
  const btnstyle = {
    background: 'black',
  };
  return <BaseButton url={props.url} icon="github" btnstyle={btnstyle} />;
};

export default GithubLinkButton;
