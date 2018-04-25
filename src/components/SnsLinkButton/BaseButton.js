// @flow
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './BaseButton.css';

const BaseButton = (props: {
  url: string,
  btnstyle: { [string]: mixed },
  icon: string,
}) => (
  <a href={props.url} className="SnsLinkButton" style={props.btnstyle}>
    <FontAwesomeIcon icon={['fab', props.icon]} />
  </a>
);

export default BaseButton;
