import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns, Container } from 'react-bulma-components';
import './app.css';

export default class NumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  render() {
    let buttons = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    return (
      <Container style={{
        paddingLeft: "30vw"
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
                          if (value.length < 4) {
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
        <Columns style={{ width: "30vw" }}>
          <Columns.Column
            style={{width: "8vw"}}
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
                if (value.length < 4) {
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
                  this.setState({ value: value.substr(value.length - 1) });
                }
              }}
              rounded
              key={"but" + 0}
            >
              🠸
            </Button>
          </Columns.Column>
        </Columns>
      </Container>
    );
  }
}