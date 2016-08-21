import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon, Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

import NewPollModal from '../components/NewPollModal';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: []
    }

    this.getPolls = this.getPolls.bind(this);
  }

  componentWillMount() {
    this.getPolls();
  }

  getPolls() {
    axios
      .get('/api/polls')
      .then(response => { this.setState({ polls: response.data });
    });
  }

  render() {
    let poll_list = this.state.polls.map(p =>
      <LinkContainer to={{pathname: `/poll/${p._id}`}} key={p._id}>
        <ListGroupItem>{p.title}</ListGroupItem>
      </LinkContainer>
    );
    return (
      <Row className="text-center">
        <Col>
          <h1><strong>Free Code Camp Polls</strong></h1>
          <h3>All Polls</h3>
        </Col>
        <Col sm={8} smOffset={2}>
          <ListGroup style={{marginTop: "2em"}}>
            {!(this.state.polls == []) ?
              (
              poll_list
              ) : (
                <ListGroupItem>
                  <h2>Loading Polls ...</h2>
                </ListGroupItem>
              )
            }
            <NewPollModal isLoggedIn={this.props.isLoggedIn} user={this.props.user} refresh={this.getPolls}/>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
