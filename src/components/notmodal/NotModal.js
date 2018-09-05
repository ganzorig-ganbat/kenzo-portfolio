import React, { Component } from "react";
import "./NotModal.css";
import img from "../modal/digitaleyes.jpg";

export default class Modal extends Component {
  render() {
    const work = this.props.match.params.slug;
    if (!work) {
      return null;
    }

    return (
      <div className="container portfolio-container">
        <div className="col col-11 portfolio-content">
          <div className="portfolio-content-wrapper">
            <div className="portfolio-header">
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

            <div className="portfolio-body">
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
                <a href="#" className="link">
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
