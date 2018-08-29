import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
  render() {
    return (
      <main className="main-container">
        {this.props.children}
      </main>
    );
  }
}