import React, { Component } from "react";
import "./Work.css";
import { Perwork } from "./perwork";
import img from "./featured_imgs/digitaleyes.jpg";


const works = [
  {
    id: 1,
    slug: "digitaleyes",
    title: "Digitaleyes agency web",
    img: img,
    tags: ["wordpress", "html5", "css3", "jquery", "responsive"]
  },
  {
    id: 2,
    slug: "devsor",
    title: "Devsor web",
    img: img,
    tags: ["laravel", "html5", "css3", "jquery", "responsive"]
  }
];

export default class Work extends Component {
  render() {
    const works_arr = works.map(work => <Perwork key={work.id} details={work} />);

    return <div className="container work-container">
        <div className="col col-11 work-content">
          <div className="work-content-wrapper">
            <div className="work-content-header">
              <h1>Work</h1>
              <p className="work-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam ad ducimus dolore tenetur quaerat ipsum enim
                aliquid repellat repellendus dolorem vero voluptatem, harum
                adipisci obcaecati! Voluptatem natus accusantium hic
                voluptates.
              </p>
            </div>

            <div className="work-content-portfolio">
              {works_arr}
            </div>
          </div>
        </div>
      </div>;
  }
}
