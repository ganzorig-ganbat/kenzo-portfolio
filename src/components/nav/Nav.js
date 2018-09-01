import React, { Component } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return <nav>
        <ul className="navigation">
          <li>
            <Link to="/">
              <strong>
                <FontAwesomeIcon icon="h-square" />
              </strong>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <strong>
                <FontAwesomeIcon icon={["fab", "adn"]} />
              </strong>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <strong>
                <FontAwesomeIcon icon={["fab", "wordpress"]} />
                <i className="fa-w" />
              </strong>
              <span>Work</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <strong>
                <FontAwesomeIcon icon="bold" />
              </strong>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <strong>
                <FontAwesomeIcon icon="copyright" />
              </strong>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>;
  }
}
