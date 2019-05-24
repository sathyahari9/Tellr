import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './app.css';
import NumPad from './Numpad.js';
import Landing from './Landing.js';
import Voice from './Voice.js';
import Endcard from './Endcard.js'

export default class Teller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "landing",
      amount: 200
    }
    this.goToKeyPad = this.goToKeyPad.bind(this);
    this.goToVoice = this.goToVoice.bind(this);
    this.postCode = this.postCode.bind(this);
  }
  goToKeyPad = () => {
    this.setState({view: "keypad"});
  }
  goToVoice = () => {
    this.setState({view: "voice"});
  }
  postCode = (code) => {
    let axiosWorks = true;
    if (axiosWorks) {
      this.setState({view: "endcard"});
    }
  }
  render() {
    switch(this.state.view) {
      case "keypad":
        return (
        <NumPad 
          next={this.postCode}
        />);
      case "voice":
        return (<Voice 
          next={this.postCode}
        />);
      case "endcard":
        return(<Endcard
          goHome={this.props.goHome}
          amount={this.state.amount} 
          />);
      default:
        return (<Landing 
          keyPad={this.goToKeyPad}
          voice={this.goToVoice}
        />);
    }
  }
}