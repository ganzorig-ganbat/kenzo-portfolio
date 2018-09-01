import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBold,
  faGlobe,
  faCode,
  faMoon,
  faCompass,
  faFutbol,
  faMobile,
  faHeart,
  faCloud,
  faHSquare,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Sidebar } from "./container/sidebar";
import { Content } from "./container/content";
import { Logo } from "./components/logo";
import { Nav } from "./components/nav";
import { Social } from "./components/social";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Work } from "./components/work";
import { Blog } from "./components/blog";
import { Contact } from "./components/contact";

library.add(
  fab,
  faBars,
  faBold,
  faGlobe,
  faCode,
  faMoon,
  faCompass,
  faFutbol,
  faMobile,
  faHeart,
  faCloud,
  faHSquare,
  faCopyright
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: true
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    const sidebarClass = this.state.navOpen ? "nav-open" : "";

    return (
      <Router>
        <div id="page" className={sidebarClass}>
          <Sidebar>
            <div className="logo-nav">
              <Logo click={this.toggleNav} />
              <Nav />
            </div>
            <div className="social-wrapper">
              <Social />
            </div>
          </Sidebar>

          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Content>
        </div>
      </Router>
    );
  }
}

export default App;
