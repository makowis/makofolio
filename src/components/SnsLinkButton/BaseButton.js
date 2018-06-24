// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BaseButton = ({
  className,
  url,
  icon,
}: {
  className: string,
  url: string,
  icon: string,
}) => (
  <a {...{ className, href: url }}>
    <FontAwesomeIcon icon={['fab', icon]} />
  </a>
);

export default BaseButton;
