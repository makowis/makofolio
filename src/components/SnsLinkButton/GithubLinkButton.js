import React, {Component} from "react";
import BaseButton from "./BaseButton"

const GithubLinkButton = (props) => {
  var btnstyle = {
    background: "black"
  };
  return (
    <BaseButton url={props.url} icon="github" btnstyle={btnstyle}/>
  )
}

export default GithubLinkButton