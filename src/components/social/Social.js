import React, { Component } from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Social extends Component {
  render() {
    return (
      <ul className="social-links">
        <li className="linkedin">
          <a
            href="https://www.linkedin.com/in/ganzorig-ganbat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li className="github">
          <a
            href="https://github.com/ganzorig-ganbat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li className="web">
          <a href="https://ganzorig-ganbat.github.io/">
            <FontAwesomeIcon icon="globe" />
          </a>
        </li>
      </ul>
    );
  }
}
