import React, { Component } from 'react';
import { Tile, Heading, Image, Columns, Button } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './app.css';
import eyeIcon from './assets/eyeHighRes.png';
import slashIcon from './assets/eyeSlashHighRes.png';

export default class Landing extends Component {
  render() {
    return(
      <Columns style={{paddingBottom: "0%"}}>
        <Columns.Column>
          <Tile 
          onClick = {this.props.voice}
          style={{
            height: "100vh",
            backgroundColor: "#307FEA"
          }}>
            <Heading style={{
              width: "100%",
              marginTop: "30vh",
              color: "#FFFFFF",
              fontWeight: "bold"
          }}>
            <img style={{width: "25%"}}src={slashIcon}/><br/><br/>
            ASSISTED<br/>VERSION</Heading>
          </Tile>
        </Columns.Column>
        <Columns.Column>
          <Tile style={{ height: "98vh" }}
            onClick={this.props.keyPad}
          >
            <Heading
              style={{
              width: "110%",
              marginTop: "30vh",
              color: "#307FEA",
              fontWeight: "bold"
            }}
          >
            <img style={{width: "25%"}} src={eyeIcon}/><br/><br/>
            NON-ASSISTED<br/>VERSION
            <br/>
            <div style={{float: "right", marginTop: "15vh", marginRight: "5vw"}}>
              <Button rounded style={{height: "4rem", backgroundColor:"#307FEA", width:"20vw"}}>
                <Heading style={{color:"#FFFFFF"}}>ENGLISH</Heading>
              </Button>
              <br/>
              <Button rounded style={{height: "4rem", width:"20vw", marginTop: "2vh"}}>
                <Heading style={{color:"#307FEA"}}>OTHER</Heading>
              </Button>
          </div>
            </Heading>
          </Tile>
        </Columns.Column>
      </Columns>
  );
  }
}
