import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon, Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import shortid from 'shortid';

import NewPollModal from '../components/layout/Polls/NewPollModal';

export default class Polls extends React.Component {
  constructor(){
    super();
    this.state = {
      polls: []
    }
  }

  componentDidMount() {
    fetch(`/api/polls`).then(response =>
      response.json()
    ).then(polls => {
      this.setState({ polls });
    }).catch(err => {
      console.log(err);
    });
  }

  add(title, options) {
    let newPoll = {
      _id: shortid.generate(),
      author: "Christopher",
      title: title,
      data: options.split(',').map(o => {return {name: o.toString().trim(), votes: 0}})
    };
    fetch('/api/polls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPoll)
    }).then(res => res.json()).then(poll => {
      const modifiedPolls = this.state.polls.concat([poll]);
      this.setState({ polls: modifiedPolls });
    }).catch(err => {
      console.log("Error adding poll:", err);
    })
  }

  render() {
    let poll_list = this.state.polls.map(p =>
      <LinkContainer to={{pathname: `/poll/${p._id}`}} key={p._id}>
        <ListGroupItem>{p.title}</ListGroupItem>
      </LinkContainer>
    );
    return (
      <Row>
        <Col md={8} mdOffset={2} sm={8} smOffset={2}>
          <h2>Polls</h2>
          <ListGroup>
            {poll_list}
            <NewPollModal add={this.add.bind(this)}/>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
