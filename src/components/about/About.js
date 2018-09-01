import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import './About.css';

const data = [
  { value: "JavaScript", count: 50 },
  { value: "React", count: 50 },
  { value: "NodeJS", count: 50 },
  { value: "ExpressJS", count: 50 },
  { value: "HTML5", count: 50 },
  { value: "MongoDB", count: 50 },
  { value: "Wordpress", count: 50 },
  { value: "JSON", count: 50 },
  { value: "jQuery", count: 50 },
  { value: "PHP", count: 50 },
  { value: "Sass", count: 50 },
  { value: "Gulp", count: 50 },
  { value: "Webpack", count: 50 },
  { value: "BEM", count: 50 },
  { value: "Git", count: 50 },
  { value: "XML", count: 50 },
  { value: "VueJS", count: 50 },
  { value: "RESTful API", count: 50 },
  { value: "MySQL", count: 50 },
  { value: "Ajax", count: 50 },
  { value: "Angular", count: 50 },
  { value: "Laravel", count: 50 },
  { value: "CSS3", count: 50 }
];

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
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates.
            </p>
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
