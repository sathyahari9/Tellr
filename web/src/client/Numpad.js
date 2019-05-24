import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns } from 'react-bulma-components';
import './app.css';

export default class NumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  render() {
    return (
      <React.Fragment>
        <Columns>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              1
          </Button>
          </Columns.Column>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              2
          </Button>
          </Columns.Column>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              3
          </Button>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              4
        </Button>
          </Columns.Column>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              5
        </Button>
          </Columns.Column>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              6
        </Button>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              7
            </Button>
          </Columns.Column>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              8
            </Button>
          </Columns.Column>
          <Columns.Column>
            <Button
              fullwidth={true}
              inverted={true}
              rounded={true}
            >
              9
           </Button>
          </Columns.Column>
        </Columns>
      </React.Fragment>
    );
  }
}