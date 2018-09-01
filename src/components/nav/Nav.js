import React, { Component } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/" exact activeClassName="active">
              <strong>
                <FontAwesomeIcon icon="h-square" />
              </strong>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <strong>
                <FontAwesomeIcon icon={["fab", "adn"]} />
              </strong>
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName="active">
              <strong>
                <FontAwesomeIcon icon={["fab", "wordpress"]} />
                <i className="fa-w" />
              </strong>
              <span>Work</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/blog" activeClassName="active">
              <strong>
                <FontAwesomeIcon icon="bold" />
              </strong>
              <span>Blog</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" activeClassName="active">
              <strong>
                <FontAwesomeIcon icon="copyright" />
              </strong>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
