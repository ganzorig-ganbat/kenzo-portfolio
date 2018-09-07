import React, { Component } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data_work } from "./../../utils/Data";
import ReactMarkdown from "react-markdown";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  back(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  dontGoBack(e) {
    e.stopPropagation();
  }

  render() {
    const work = data_work.portfolios.find(
      x => x.slug === this.props.match.params.slug
    );
    if (!work) {
      return null;
    }

    const tags = work.tags.map(tag => `#${tag}`).join(", ");
    document.title = "Ganzorig.me - " + work.title;

    return (
      <div className="modal-wrapper" onClick={this.back}>
        <div onClick={this.dontGoBack} className="modal-container">
          <button type="button" className="x-button" onClick={this.back}>
            <FontAwesomeIcon icon="window-close" />
          </button>

          <div className="modal-header">
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

          <div className="modal-body">
            <ReactMarkdown source={work.content} />
            <p>
              <a href={work.link} className="link">
                Visit Site
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
