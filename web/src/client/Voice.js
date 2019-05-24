import React, { Component } from 'react';
import './app.css';
import Recorder from 'recorder-js';
import Axios from 'axios';
import mic from './assets/mic.png';
import { Heading } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default class Voice extends Component {
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

 blobToBase64(blob, callback) {
   var reader = new FileReader();
   reader.readAsDataURL(blob);
   reader.onloadend = function() {
     let base64 = reader.result;
     callback(base64);
   }
 }

  handleRecord() {
    const { record, recorder } = this.state;
    if (record) {
      this.initRecorder((rec) => rec.start());
    } else {
      recorder.stop()
        .then(({ blob }) => {
          this.blobToBase64(blob, (base64) => {
            const formData = new FormData();
            formData.append('data', base64);
            Axios.post('/authenticate', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((res) => {
              console.log(res);
            }).catch((err) => {
              console.log(err);
            });
          });
        });
    }
  }

  render() {
    const { record, ready } = this.state;
    let contents = "Something went wrong.";
    if (record) {
      if (ready) {
        contents = "Press again to stop recording!"
      } else {
        contents = "Wait for a bit..."
      }
    } else {
      contents = "Press to record your code!";
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
        <Heading style= {{
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
