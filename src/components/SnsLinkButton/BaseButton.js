/* eslint-disable react/prop-types */
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './BaseButton.css';

const BaseButton = (props) => (
  <a href={props.url} className="SnsLinkButton" style={props.btnstyle}>
    <FontAwesomeIcon icon={['fab', props.icon]} />
  </a>
);

export default BaseButton;
