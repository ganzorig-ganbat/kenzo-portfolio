import React, { Component } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navigation">
          <li>
            <a href="#">
              <strong>
                <FontAwesomeIcon icon={["fab", "adn"]} size="2x" />
              </strong>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <strong>
                <FontAwesomeIcon icon={["fab", "wordpress"]} size="2x" />
                <i className="fa-w" />
              </strong>
              <span>Work</span>
            </a>
          </li>
          <li>
            <a href="#">
              <strong>
                <FontAwesomeIcon icon="bold" size="2x" />
              </strong>
              <span>Blog</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
