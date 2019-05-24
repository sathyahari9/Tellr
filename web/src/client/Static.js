import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Heading, Button } from 'react-bulma-components';
import './app.css';
import mock from './assets/mock.png';

export default class Static extends Component {
  render() {
    return (
      <Columns style={{
        height: "120%",
        width: "99.9vw",
        backgroundColor: "#307FEA",
        position: "absolute",
        top: 0,
        left: 0
      }}>
        <Columns.Column>
          <Heading style={{
            marginTop: "35vh",
            fontSize: "8vh",
            color: "#FFFFFF"
          }}>
            Banking should be accessible for everyone.
            </Heading>
          <Heading
            style={{
              color: "#FFFFFF"
            }}
          >
            Tellr is a mobile and IoT solution <br/> for accessible yet secure banking.
            </Heading>
          <Button rounded style={{ height: "4rem", width: "20vw", marginTop: "2vh", borderColor: "#307FEA" }}
            onClick={this.props.appOpen}
          >
            <Heading style={{ color: "#307FEA" }}>Try Me!</Heading>
          </Button>
        </Columns.Column>
        <Columns.Column>
          <img style={{
            marginTop: "20vh"
          }}
            src={mock} />
        </Columns.Column>
      </Columns>
    );
  }
}
