import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBold, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Sidebar } from "./container/sidebar";
import { Content } from "./container/content";
import { Logo } from "./components/logo";
import { Nav } from "./components/nav";
import { Social } from "./components/social";
import { Home } from "./components/home";

library.add(fab, faBars, faBold, faGlobe);

class App extends Component {
  render() {
    return (
      <div id="page">
        <Sidebar>
          <div className="logo-nav">
            <Logo />
            <Nav />
          </div>
          <div className="social-wrapper">
            <Social />
          </div>
        </Sidebar>

        <Content>
          <Home />
        </Content>
      </div>
    );
  }
}

export default App;
