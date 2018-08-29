import React, { Component } from 'react';
import logo from './logo.jpg';
import { NavButton } from '../navbutton';
import './Logo.css';

export default class Logo extends Component {
  render() {

    return <div className="logo-container">
        <NavButton />

        <div className="logo-wrapper">
          <div className="logo-img">
            <img src={logo} width="125" height="125" alt="Kenzo" />
          </div>
        </div>
      </div>;
  }
}