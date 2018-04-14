import React, {Component} from "react";
import BaseButton from "./BaseButton"

class GithubLinkButton extends Component {
  render() {
    var btnstyle = {
      background: "black"
    };
    return (
      <BaseButton url={this.props.url} icon="github" btnstyle={btnstyle}/>
    )
  }
}

export default GithubLinkButton