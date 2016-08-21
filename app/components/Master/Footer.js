import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
  render () {
    return (
      <Row style={{marginTop: "2em", marginBottom: "2em"}}>
        <Col sm={8} smOffset={2}>
          <footer>
            Created by <a href="https://chrisaguilar.github.io/" target="_blank">Christopher Aguilar</a>
            <br />
            <a href="https://github.com/chrisaguilar/fcc-voting/" target="_blank">View on GitHub</a>
          </footer>
        </Col>
      </Row>
    );
  }
}
