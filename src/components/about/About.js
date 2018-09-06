import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import "./About.css";
import { data_about } from "./../../utils/Data";

const data = data_about.skills.map(skill => {
  return { value: skill, count: 50 };
});

const colors = ["#d71717", "#0b72f1", "#22ce0b"];

const customRenderer = tag => (
  <span
    key={tag.value}
    style={{
      animation: "blinker 3s linear infinite",
      animationDelay: `${Math.random() * 2}s`,
      borderBottom: `1px solid ${colors[Math.floor(Math.random() * 3)]}`
    }}
  >
    {tag.value}
  </span>
);

export default class About extends Component {
  render() {
    return (
      <div className="container about-container">
        <div className="col col-21 about-content">
          <div className="about-content-wrapper">
            <h1>{data_about.title}</h1>
            <p>{data_about.content}</p>
          </div>
        </div>

        <div className="col col-22 about-cloud">
          <TagCloud
            tags={data}
            minSize={1}
            maxSize={5}
            renderer={customRenderer}
          />
        </div>
      </div>
    );
  }
}
