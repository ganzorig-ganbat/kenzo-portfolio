import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavButton.css';

export default class NavButton extends Component {
  render() {
    return <button onClick={this.props.click} className="navbutton">
        <FontAwesomeIcon icon="bars" />
      </button>;
  }
}
