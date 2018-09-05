import React, { Component } from "react";
import "./Main.css";

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
  faCopyright,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router-dom";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Sidebar } from "../sidebar";
import { Content } from "../content";
import { Logo } from "../../components/logo";
import { Nav } from "../../components/nav";
import { Social } from "../../components/social";
import { Home } from "../../components/home";
import { About } from "../../components/about";
import { Work } from "../../components/work";
import { Modal } from "../../components/modal";
import { Blog } from "../../components/blog";
import { Contact } from "../../components/contact";
import { NotModal } from "../../components/notmodal";

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
  faCopyright,
  faWindowClose
);

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { navOpen: true };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const sidebarClass = this.state.navOpen ? "nav-open" : "";
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return <div id="page" className={sidebarClass}>
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
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route path="/work/:slug" component={NotModal} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
          {isModal ? <Route path="/work/:slug" component={Modal} /> : null}
        </Content>
      </div>;
  }
}
