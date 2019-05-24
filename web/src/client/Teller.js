import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './app.css';
import NumPad from './Numpad.js';
import Landing from './Landing.js';
import Voice from './Voice.js';

export default class Teller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "landing"
    }
    this.goToKeyPad = this.goToKeyPad.bind(this);
    this.goToResult = this.goToResult.bind(this);
    this.goToVoice = this.goToVoice.bind(this);
  }
  goToKeyPad = () => {
    this.setState({view: "keypad"});
  }
  goToVoice = () => {
    this.setState({view: "voice"});
  }
  goToResult = () => {
    this.setState({view: "endcard"});
  }

  render() {
    switch(this.state.view) {
      case "keypad":
        return (<NumPad />);
      case "voice":
        return (<Voice />);
      case "endcard":
        return(<h1>YAYAYAYAYAY</h1>);
      default:
        return (<Landing 
          keyPad={this.goToKeyPad}
          voice={this.goToVoice}
        />);
    }
  }
}