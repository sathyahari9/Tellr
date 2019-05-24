import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Columns } from 'react-bulma-components';
import './app.css';

export default class Static extends Component {
  render() {
    return (
      <Container>
        <Columns>
        </Columns>
      </Container>
    );
  }
}