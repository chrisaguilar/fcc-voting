import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

import NewPollModal from '../components/NewPollModal';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      userData: []
    }
    this.getName = this.getName.bind(this);
    this.getPolls = this.getPolls.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getName() {
    let userData = this.state.user;
    if (userData.facebook) return (userData.facebook.displayName || "Anonymous");
    else if (userData.github) return (userData.github.displayName || "Anonymous");
    else if (userData.google) return (userData.google.displayName || "Anonymous");
    else if (userData.twitter) return (userData.twitter.name || "Anonymous");
    else return "Anonymous";
  }

  getPolls() {
    axios
      .get(`/api/user/${this.state.user._id}`)
      .then(response => this.setState({ userData: response.data }))
      .catch(error => console.error(error));
  }

  getUser() {
    axios
      .get('/verifyAuth')
      .then(response => {
        this.setState({ user: response.data.user })
      })
      .then(response => {
        this.getPolls();
      })
      .catch(error => console.error(error));
  }

  render () {
    const list_items = this.state.userData.map(d =>
      <LinkContainer to={{pathname: `/poll/${d._id}`}} key={d._id}>
        <ListGroupItem>{d.title}</ListGroupItem>
      </LinkContainer>
    );

    return (
      <Row className="text-center">
        <Col md={8} mdOffset={2} sm={8} smOffset={2}>
          <h1><strong>Free Code Camp Polls</strong></h1>
          <h3>Polls You Own</h3>
          <ListGroup style={{marginTop: "2em"}}>
            {(list_items.length == 0) ?
              (
                <ListGroupItem>
                  You don't currently own any polls. <br /> <br /> Click the button below to make one!
                </ListGroupItem>
              ) : (
                list_items
            )}
            <NewPollModal isLoggedIn={this.props.isLoggedIn} user={this.props.user} refresh={this.getPolls}/>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
