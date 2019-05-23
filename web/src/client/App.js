import React, { Component } from 'react';
import './app.css';
import Recorder from 'recorder-js';
import axios from 'axios';

const backend = axios.create({
  baseUrl: './authenticate',
  timeout: 10000
});
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const recorder = new Recorder(audioContext);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    };
    this.toggleRecord = this.toggleRecord.bind(this);
    this.postAudio = this.postAudio.bind(this);
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then((stream) => {
        recorder.init(stream);
      });
  }

  toggleRecord = () => {
    const { record } = this.state;
    this.setState({ record: !record }, this.postAudio);
  }

  postAudio = () => {
    const { record } = this.state;
    if (!record) {
      recorder.stop()
        .then(({ blob }) => {
          console.log(blob);
          backend.post(blob, {
            header: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {
            console.log(response);
          });
        });
    }
  }

  render() {
    const { record } = this.state;
    return (
      <React.Fragment>
        <button type="button" onClick={this.toggleRecord} />
        { record ? (
          <h1>Recording</h1>
        ) : (
          <h1>Not Recording</h1>
        )}
      </React.Fragment>
    );
  }
}
