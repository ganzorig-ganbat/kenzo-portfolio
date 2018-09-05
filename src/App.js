import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from './container/main';

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Main} />
      </Router>
    );
  }
}

export default App;
