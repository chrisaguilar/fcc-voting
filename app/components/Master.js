import React from "react";
import { Grid } from 'react-bootstrap';
import axios from 'axios';

import Header from './Master/Header';
import Footer from './Master/Footer';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: undefined
    }
  }

  componentWillMount() {
    axios('/verifyAuth').then(response => {
      this.setState({ isLoggedIn: response.data.isLoggedIn, user: response.data.user });
    });
  }

  render() {
    return (
      <Grid fluid>
        <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user}/>
        {React.cloneElement(this.props.children, { isLoggedIn: this.state.isLoggedIn, user: this.state.user })}
        <Footer />
      </Grid>
    );
  }
}
