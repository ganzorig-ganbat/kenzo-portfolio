import React, { Component } from "react";
import "./NotModal.css";
import { data_work } from "./../../utils/Data";
import { NoMatch } from "./../nomatch";
import ReactMarkdown from "react-markdown";

export default class Modal extends Component {
  render() {
    const work = data_work.portfolios.find(
      x => x.slug === this.props.match.params.slug
    );

    if (!work) {
      return <NoMatch />;
    }

    const tags = work.tags.map(tag => `#${tag}`).join(", ");
    document.title = "Ganzorig.me - " + work.title;

    return (
      <div className="container portfolio-container">
        <div className="col col-11 portfolio-content">
          <div className="portfolio-content-wrapper">
            <div className="portfolio-header">
              <div className="img-wrapper">
                <img src={work.img} alt="" />
              </div>
              <div className="title-wrapper">
                <h1 className="title">{work.title}</h1>
                <p className="tags">{tags}</p>
                <p className="link-wrapper">
                  <a href={work.link} className="link" target="_blank">
                    Visit Site
                  </a>
                </p>
              </div>
            </div>

            <div className="portfolio-body">
              <ReactMarkdown source={work.content} />
              <p>
                <a href={work.link} className="link">
                  Visit Site
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
