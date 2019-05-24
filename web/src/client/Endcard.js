import React, { Component } from 'react';
import { Tile, Heading, Image, Columns, Button } from 'react-bulma-components';
//import converter from 'number-to-words';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './app.css';
import money from './assets/money.png';

export default class Landing extends Component {
  render() {
    let amount = this.props.amount;
    amount = converter.toWords(amount);
    amount = amount.charAt(0).toUpperCase() + amount.slice(1);
    return(
      <div style={{height: "100vh", width: "99.9vw", backgroundColor: "#307FEA", overflow: "hidden"}}>
        <Columns style={{width: "100vw"}}>
          <Columns.Column>
            <img
              style={{
                marginTop: "4vw",
                width: "20vw"
              }}
              src={money}
            />
            <Heading style={{
              fontWeight: "bold",
              color: '#FFFFFF',
              marginTop: "3vw",
              marginBottom: "3vw"
            }}>
              {`${amount} dollars have been dispensed.`}
              <br />
              Thank you for banking with us!
            </Heading>
            <Button
              onClick={this.props.goHome}
              rounded
              style={{height: "6vw", width:"14vw", borderColor: "#307FEA"}}>
                <Heading style={{color:"#307FEA"}}>GO BACK</Heading>
              </Button>
          </Columns.Column>
        </Columns>
      </div>
    );
  }
}
