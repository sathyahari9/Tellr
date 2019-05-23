import React, { Component } from 'react';
import './app.css';
import ReactMic from 'react-mic';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    };
    this.onStop = this.onStop.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.startRecording = this.startRecording.bind(this);
  }

  onStop = (recorded) => {
    console.log(recorded);
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  render() {
    const { record } = this.state;
    return (
      <React.Fragment>
        <ReactMic
          record={record}
          onStop={this.onStop}
        />
        <button onClick={this.startRecording} type="button" />
        <button onClick={this.stopRecording} type="button" />
      </React.Fragment>
    );
  }
}
