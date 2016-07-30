import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Header />
        {this.props.children}
        <Footer />
      </Grid>
    );
  }
}
