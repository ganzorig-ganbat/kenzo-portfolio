import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Icons from "./../../utils/Icons";
import { data_home } from "./../../utils/Data";

export default class Home extends Component {
  constructor(props) {
    super(props);

    let arr = [];

    for (let i = 0; i < Icons.length; i++) {
      const fric = i % 2 === 0 ? 0.03 : 0.02;
      arr.push({
        offsetX: 0,
        offsetY: 0,
        friction: fric
      });
    }

    this.state = { iconState: arr };

    this._mouseMove = this._mouseMove.bind(this);
  }

  componentDidMount() {
    document.title = "Ganzorig.me - Ganzorig Ganbat's Portfolio";
  }

  _mouseMove(e) {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let arr = [...this.state.iconState];

    arr.forEach(item => {
      item.offsetX = -followX * item.friction;
      item.offsetY = -followY * item.friction;
    });

    this.setState({ iconState: arr });
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
            <h1>{data_home.title}</h1>
            <h3>{data_home.subtitle}</h3>
            <p className="link-wrapper">
              <Link to="/about" className="link">
                Contact Me
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
