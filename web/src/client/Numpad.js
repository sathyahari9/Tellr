import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns, Container, Heading } from 'react-bulma-components';
import './app.css';
const buttons = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


export default class NumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Enter access code",
      display: ""
    }
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    fetch("/authenticate", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: this.state.value
      })
    }).then(res => res.json())
      .then(res => {
        //const json = JSON.parse(res);
        let amount = res.amount;
        console.log(res);
        if(amount === -1) {
          this.setState({ display: "Wrong code, please try again" });
        } else {
          this.setState({ display: `You have withdrawn $${amount}!` });
          this.props.next(amount);
        }
      });
  }

  render() {
    let { value, display } = this.state;
    return (
      <React.Fragment>
        <Heading style={{
          marginTop: '1vw',
          fontSize: '3.5vw',
          height: '5.25vw'
        }}>
          {value}
        </Heading>
        <Container style={{
          paddingLeft: "29vw"
        }}>
          {buttons.map((row, rowInd) => {
            return (
              <Columns style={{ width: "30vw" }}>
                {
                  row.map((num) => {
                    return (
                      <Columns.Column
                        key={"row" + rowInd + num}
                      >
                        <Button
                          style={{
                            color: "#307FEA",
                            width: "8vw",
                            height: "8vw",
                            fontSize: "3vw",
                            fontWeight: "bold",
                            borderColor: "#307FEA"
                          }}
                          onClick={() => {
                            let { value } = this.state;
                            if (value === "Enter access code") {
                              this.setState({value: "" + num});
                            }
                            else if (value.length < 5) {
                              this.setState({ value: value + num });
                            }
                          }}
                          rounded
                          key={"but" + num}
                        >
                          {num}
                        </Button>
                      </Columns.Column>
                    );
                  }
                  )}
              </Columns>
            );
          })}
          <Columns style={{ width: "45vw" }}>
            <Columns.Column
              style={{ width: "8vw" }}
            ></Columns.Column>
            <Columns.Column>
              <Button
                inverted
                style={{
                  color: "#307FEA",
                  borderColor: "#307FEA",
                  width: "8vw",
                  height: "8vw",
                  fontSize: "3vw",
                  fontWeight: "bold"
                }}
                onClick={() => {
                  let { value } = this.state;
                  if (value.length < 6) {
                    this.setState({ value: value + 0 });
                  }
                }}
                rounded
                key={"but" + 0}
              >
                0
            </Button>
            </Columns.Column>
            <Columns.Column>
              <Button
                inverted
                style={{
                  width: "8vw",
                  height: "8vw",
                  fontSize: "3vw",
                  fontWeight: "bold",
                  backgroundColor: "#307FEA",
                  color: "#FFFFFF",
                }}
                onClick={() => {
                  let { value } = this.state;
                  if (value.length > 0) {
                    this.setState({ value: value.substr(0, value.length - 1) });
                  }
                }}
                rounded
                key={"but" + 0}
              >
                🠸
            </Button>
            </Columns.Column>
            <Columns.Column>
              <Button
                rounded style={{ height: "8vw", backgroundColor: "#307FEA", width: "13vw" }}
                onClick={this.handleNext}
              >
                <Heading style={{ color: "#FFFFFF", fontSize: "3vw"}}>Next 🡒</Heading>
              </Button>
            </Columns.Column>
          </Columns>
        </Container>
        {(display !== "") &&
          <div>
            {display}
          </div>
        }
      </React.Fragment>
    );
  }
}
