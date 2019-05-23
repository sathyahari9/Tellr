import React, { Component } from 'react';
import './app.css';
import Recorder from 'recorder-js';
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      record: false,
      recorder: false
    };
    this.initRecorder = this.initRecorder.bind(this);
    this.toggleRecord = this.toggleRecord.bind(this);
    this.handleRecord = this.handleRecord.bind(this);
  }

  initRecorder = (callback) => {
    let audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let recorder = new Recorder(audioContext);
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then((stream) => {
        recorder.init(stream);
        this.setState({ ready: true, recorder: recorder });
        callback(recorder);
      });
  }

  toggleRecord = () => {
    const { record } = this.state;
    this.setState({ record: !record }, this.handleRecord);
  }

  handleRecord = () => {
    const { record, recorder } = this.state;
    if (record) {
      this.initRecorder((rec) => rec.start());
    } else {
      recorder.stop()
        .then(({ blob }) => {
          var data = new FormData();
          data.append("blob", blob);
          Axios.put('/authenticate', blob)
            .then((res) => {
              console.log(res);
            });
        });
    }
  }

  render() {
    const { record, ready } = this.state;
    return (
      <React.Fragment>
        <button type="button" onClick={this.toggleRecord} />
        {ready || <h1>Not ready</h1>}
        {record ? (
          <h1>Recording</h1>
        ) : (
            <h1>Not Recording</h1>
          )}
      </React.Fragment>
    );
  }
}
