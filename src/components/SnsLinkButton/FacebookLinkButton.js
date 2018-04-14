import React, {Component} from "react";
import BaseButton from "./BaseButton"

class FacebookLinkButton extends Component {
  render() {
    var btnstyle = {
      background: "#3b75d4"
    };
    return (
      <BaseButton url={this.props.url} icon="facebook-f" btnstyle={btnstyle}/>
    )
  }
}

export default FacebookLinkButton