import React, { Component } from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data_socials } from "./../../utils/Data";

export default class Social extends Component {
  render() {
    return (
      <ul className="social-links">
        <li className="linkedin">
          <a
            href={data_socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li className="github">
          <a
            href={data_socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li className="email">
          <a href={"mailto:"+data_socials.email}>
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
      </ul>
    );
  }
}
