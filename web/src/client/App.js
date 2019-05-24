import React, { Component } from 'react';
import './app.css';
import Navbar from './Navbar.js';
import Teller from './Teller.js';
import Static from './Static.js';
import Voice from './Voice.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "landing"
    };
    this.goToHome = this.goToHome.bind(this);
    this.goToApp = this.goToApp.bind(this);
  }

  goToHome() {
    this.setState({ view: "landing" });
  }

  goToApp() {
    this.setState({ view: "app" });
  }

  render() {
    switch(this.state.view) {
      case "app":
        return (
          <Teller />
        );
      default:
        return (
          <React.Fragment>
            <Voice />
            <Navbar
              homeOpen = {this.goToHome}
              appOpen = {this.goToApp}
            />
            <Static />
          </React.Fragment>
        );
    }

  }
}
