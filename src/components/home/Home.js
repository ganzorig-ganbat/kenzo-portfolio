import React, { Component } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [
  {
    icon: <FontAwesomeIcon icon={["fab", "css3-alt"]} />,
    color: "#22ce0b",
    left: "7%",
    top: "7%"
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "google"]} />,
    color: "#d71717",
    left: "20%",
    top: "23%"
  },
  {
    icon: <FontAwesomeIcon icon="cloud" />,
    color: "#0b72f1",
    right: "45%",
    top: "13%"
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "js"]} />,
    color: "#22ce0b",
    right: "25%",
    top: "33%"
  },
  {
    icon: <FontAwesomeIcon icon="code" />,
    color: "#d71717",
    left: "9%",
    top: "45%"
  },
  {
    icon: <FontAwesomeIcon icon="moon" />,
    color: "#0b72f1",
    left: "6%",
    bottom: "40%"
  },
  {
    icon: <FontAwesomeIcon icon="compass" />,
    color: "#22ce0b",
    left: "33%",
    bottom: "30%"
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "html5"]} />,
    color: "#0b72f1",
    right: "23%",
    bottom: "35%"
  },
  {
    icon: <FontAwesomeIcon icon="futbol" />,
    color: "#d71717",
    right: "13%",
    bottom: "25%"
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "y-combinator"]} />,
    color: "#d71717",
    left: "13%",
    bottom: "15%"
  },
  {
    icon: <FontAwesomeIcon icon="mobile" />,
    color: "#0b72f1",
    right: "37%",
    bottom: "13%"
  },
  {
    icon: <FontAwesomeIcon icon="heart" />,
    color: "#22ce0b",
    right: "15%",
    bottom: "10%"
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "react"]} />,
    color: "#d71717",
    right: "15%",
    top: "10%"
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "chrome"]} />,
    color: "#22ce0b",
    left: "40%",
    top: "13%"
  }
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    let arr = [];

    for (let i = 0; i < icons.length; i++) {
      arr.push({ offsetX: 0, offsetY: 0, friction: 0.02 });
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
    const items = icons.map((icon, index) => {
      let st = Object.assign({}, icon);
      delete(st.icon);
      st.transform = `translate(${this.state.iconState[index].offsetX}px, ${
        this.state.iconState[index].offsetY
      }px)`;

      return <div key={index} style={st}>
          {icon.icon}
        </div>;
    });

    return (
      <div className="home-wrapper" onMouseMove={this._mouseMove}>
        <div className="canvas">{items}</div>
        <div className="home">
          <h1>
            A frontend developor focusing on modern & clean user interfaces.
          </h1>
          <h3>
            I'm a frontend developer that has been specialising in web design
            and development for the past 5 years.
          </h3>
        </div>
      </div>
    );
  }
}
