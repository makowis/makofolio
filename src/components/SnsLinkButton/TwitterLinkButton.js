import React, {Component} from "react";
import BaseButton from "./BaseButton"

const TwitterLinkButton = (props) => {
  var btnstyle = {
    background: "#1da1f3"
  };
  return (
    <BaseButton url={props.url} icon="twitter" btnstyle={btnstyle}/>
  )
}

export default TwitterLinkButton