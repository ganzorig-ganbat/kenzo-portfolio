import React, { Component } from "react";
import "./NoMatch.css";
import Icons from "./../../utils/Icons";
import { Link } from "react-router-dom";

export default class NoMatch extends Component {
  constructor(props) {
    super(props);

    let arr = [];

    for (let i = 0; i < Icons.length; i++) {
      const fric = i % 2 === 0 ? 0.03 : 0.02;
      arr.push({ offsetX: 0, offsetY: 0, friction: fric });
    }

    this.state = {
      iconState: arr
    };

    this._mouseMove = this._mouseMove.bind(this);
  }

  _mouseMove(e) {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let arr = [...this.state.iconState];

    arr.forEach(item => {
      item.offsetX = -followX * item.friction;
      item.offsetY = -followY * item.friction;
    });

    this.setState({
      iconState: arr
    });
  }

  render() {
    const items = Icons.map((icon, index) => {
      let st = Object.assign({}, icon);
      delete st.icon;
      st.transform = `translate(${this.state.iconState[index].offsetX}px, ${
        this.state.iconState[index].offsetY
      }px)`;

      return (
        <div key={index} style={st}>
          {icon.icon}
        </div>
      );
    });

    return (
      <div className="home-container" onMouseMove={this._mouseMove}>
        <div className="canvas">{items}</div>
        <div className="home-wrapper">
          <div className="home">
            <h1>404 not found</h1>
            <h3>Something went wrong</h3>
            <p className="link-wrapper">
              <Link to="/" className="link">
                Back to Home page
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
