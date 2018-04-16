/* eslint-disable react/prop-types */
import React from 'react';
import BaseButton from './BaseButton';

const GithubLinkButton = (props) => {
  const btnstyle = {
    background: 'black',
  };
  return (
    <BaseButton url={props.url} icon="github" btnstyle={btnstyle} />
  );
};

export default GithubLinkButton;
