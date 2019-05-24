import React, { Component } from 'react';
import { Tile, Heading, Image, Columns, Button } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './app.css';
import eyeIcon from './assets/eyeHighRes.png';
import slashIcon from './assets/eyeSlashHighRes.png';
import NumPad from './Numpad.js';
import Landing from './Landing.js';

export default class Teller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "landing"
    }
  }
  render() {
    switch(this.state.view) {
      case "keypad":
        return (<NumPad />);
      default:
        return (<Landing />);
    }
  }
}