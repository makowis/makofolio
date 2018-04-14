import React, {Component} from 'react'
import './BaseButton.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class BaseButton extends Component {
  render() {
    return (
      <a href={this.props.url} className="SnsLinkButton" style={this.props.btnstyle}>
        <FontAwesomeIcon icon={["fab", this.props.icon]} />
      </a>
    )
  }
}

export default BaseButton