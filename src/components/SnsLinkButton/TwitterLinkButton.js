import React, {Component} from "react";
import BaseButton from "./BaseButton"

class TwitterLinkButton extends Component {
  render() {
    var btnstyle = {
      background: "#1da1f3"
    };
    return (
      <BaseButton url={this.props.url} icon="twitter" btnstyle={btnstyle}/>
    )
  }
}

export default TwitterLinkButton