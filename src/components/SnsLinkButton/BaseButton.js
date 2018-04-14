import React, {Component} from 'react'
import './BaseButton.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


const BaseButton = (props) => (
  <a href={props.url} className="SnsLinkButton" style={props.btnstyle}>
    <FontAwesomeIcon icon={["fab", props.icon]} />
  </a>
)

export default BaseButton