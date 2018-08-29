import React, { Component } from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Social extends Component {
  render() {
    return (
      <ul className="social-links">
        <li className="linkedin">
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
        </li>
        <li className="github">
          <a href="#">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
        </li>
        <li className="web">
          <a href="#">
            <FontAwesomeIcon icon="globe" size="2x" />
          </a>
        </li>
      </ul>
    );
  }
}
