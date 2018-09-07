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
  faWindowClose,
  faEnvelope
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
import { NotModal } from "../../components/notmodal";
import { NoMatch } from "../../components/nomatch";

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
  faWindowClose,
  faEnvelope
);

export default class Main extends Component {
  constructor(props) {
    super(props);

    let navOpen = this.getItem();

    this.state = { navOpen: navOpen };

    this.toggleNav = this.toggleNav.bind(this);
  }

  getItem(){
    const ret = localStorage.getItem("navOpen");

    if (ret === null ){
      localStorage.setItem("navOpen", "true");
      return true;
    }

    return ret === "true" ? true : false;
  }

  toggleNav() {
    const state = !this.state.navOpen;
    this.setState({
      navOpen: state
    });

    localStorage.setItem("navOpen", `${state}`);
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
    return (
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
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route path="/work/:slug" component={NotModal} />
            <Route component={NoMatch} />
            {/* <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
          {isModal ? <Route path="/work/:slug" component={Modal} /> : null}
        </Content>
      </div>
    );
  }
}
