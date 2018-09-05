import React, { Component } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./digitaleyes.jpg";

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
    const work = this.props.match.params.slug;
    if (!work) {
      return null;
    }

    return <div className="modal-wrapper" onClick={this.back}>
        <div onClick={this.dontGoBack} className="modal-container">
          <button type="button" className="x-button" onClick={this.back}>
            <FontAwesomeIcon icon="window-close" />
          </button>

          <div className="modal-header">
            <div className="img-wrapper">
              <img src={img} alt="" />
            </div>
            <div className="title-wrapper">
              <h1 className="title">Digitaleyes Agency Web</h1>
              <p className="tags">#Wordpress, #HTML5, #css3</p>
              <p className="link-wrapper">
                <a href="#" className="link" target="_blank">
                  Visit Site
                </a>
              </p>
            </div>
          </div>

          <div className="modal-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, ipsum aut quasi maxime ex sint numquam, voluptatem
              tempora, soluta dolore cumque nisi? Aliquid laboriosam sit cum
              minima quae. Non, odit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, ipsum aut quasi maxime ex sint numquam, voluptatem
              tempora, soluta dolore cumque nisi? Aliquid laboriosam sit cum
              minima quae. Non, odit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, ipsum aut quasi maxime ex sint numquam, voluptatem
              tempora, soluta dolore cumque nisi? Aliquid laboriosam sit cum
              minima quae. Non, odit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, ipsum aut quasi maxime ex sint numquam, voluptatem
              tempora, soluta dolore cumque nisi? Aliquid laboriosam sit cum
              minima quae. Non, odit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, ipsum aut quasi maxime ex sint numquam, voluptatem
              tempora, soluta dolore cumque nisi? Aliquid laboriosam sit cum
              minima quae. Non, odit?
            </p>
            <p>
              <a href="#" className="link">Visit Site</a>
            </p>
          </div>
        </div>
      </div>;
  }
}
