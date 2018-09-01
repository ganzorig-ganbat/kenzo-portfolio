import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import { NavButton } from "../navbutton";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <NavButton click={this.props.click} />

        <div className="logo-wrapper">
          <div className="logo-img">
            <Link to="/">
              <img src={logo} alt="Kenzo" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
