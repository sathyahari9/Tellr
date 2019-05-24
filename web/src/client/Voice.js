import React, { Component } from 'react';
import './app.css';
import Recorder from 'recorder-js';
import Axios from 'axios';
import mic from './assets/mic.png';
import { Heading } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import SpeechToText from 'speech-to-text';

export default class Voice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      record: false,
      recorder: false,
      interimText: ""
    };
    this.initRecorder = this.initRecorder.bind(this);
    this.toggleRecord = this.toggleRecord.bind(this);
    this.handleRecord = this.handleRecord.bind(this);
    this.blobToBase64 = this.blobToBase64.bind(this);
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

  /*
  blobToBase64(blob, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      let base64 = reader.result;
      callback(base64);
    }
  }*/

  handleRecord() {
    if (this.state.record) {
      this.listener.startListening()
    } else {
      this.listener.stopListening();
      let code = this.state.interimText.replace(/\s/g, '')
      Axios.post('/authenticate', {code: code}).then((res) => {
        console.log(res);
        JSON.parse(res);
      });
    }
  }

  componentWillMount() {
    const onAnythingSaid = text => {
      this.setState({ interimText: text });
    };

    const onEndEvent = () => {
      if (this.state.listening) {
        this.startListening();
      }
    };

    const onFinalised = text => {
      this.setState({
        finalisedText: [text, ...this.state.finalisedText],
        interimText: ''
      });
    };

    try {
      this.listener = new SpeechToText(onFinalised, onEndEvent, onAnythingSaid);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { record, ready } = this.state;
    let contents = "Something went wrong.";
    if (record) {
      if (this.listener) {
        contents = "Press again to stop recording!"
      } else {
        contents = "Wait for a bit..."
      }
    } else {
      contents = "Press to record your code!";
    }
    if (this.state.interimText.length > 0) {
      contents = this.state.interimText;
    }
    return (
      <div
        onClick={this.toggleRecord}
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#307FEA"
        }}
      >
        <img
          style={{
            paddingTop: "20vh",
            width: "20vw"
          }}
          src={mic}

        />
        <Heading style={{
          fontSize: "6vw",
          paddingTop: "5vh",
          color: "#FFFFFF"
        }}>
          {contents}
        </Heading>
      </div>
    );
  }
}
