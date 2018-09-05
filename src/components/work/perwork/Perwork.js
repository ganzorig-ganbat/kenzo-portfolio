import React, { Component } from "react";
import "./Perwork.css";
import { Link } from "react-router-dom";

export default class Perwork extends Component {
  render() {
    const details = this.props.details;
    const tags = details.tags.map(tag => `#${tag}`).join(", ");

    return (
      <article className="per-work">
        <div className="per-work-wrapper">
          <Link
            key={details.id}
            to={{
              pathname: `/work/${details.slug}`,
              state: { modal: true }
            }}
            className="per-work-anchor"
          />
          <div className="per-work-img">
            <img src={details.img} alt="" />
          </div>
          <div className="per-work-title">
            <h2>{details.title}</h2>
            <p className="per-work-tags">{tags}</p>
          </div>
        </div>
      </article>
    );
  }
}
