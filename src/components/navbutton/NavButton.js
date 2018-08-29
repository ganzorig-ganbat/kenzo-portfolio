import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavButton.css';

export default class NavButton extends Component {
  render() {
    return <button className="navbutton">
        <FontAwesomeIcon icon="bars" size="2x" />
      </button>;
  }
}
