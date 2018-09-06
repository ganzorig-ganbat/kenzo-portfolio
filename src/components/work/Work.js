import React, { Component } from "react";
import "./Work.css";
import { Perwork } from "./perwork";
import { data_work } from "./../../utils/Data";

const works = data_work.portfolios;

export default class Work extends Component {
  render() {
    const works_arr = works.map(work => (
      <Perwork key={work.id} details={work} />
    ));

    return (
      <div className="container work-container">
        <div className="col col-11 work-content">
          <div className="work-content-wrapper">
            <div className="work-content-header">
              <h1>{data_work.title}</h1>
              <p className="work-description">{data_work.description}</p>
            </div>

            <div className="work-content-portfolio">{works_arr}</div>
          </div>
        </div>
      </div>
    );
  }
}
