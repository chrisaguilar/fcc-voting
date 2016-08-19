import React from 'react';
import { Row, Col, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';
import axios from 'axios';

import Options from "../components/Poll/Options";
import PollChart from "../components/Poll/PollChart";
import SocialButtons from "../components/Poll/SocialButtons";

export default class Poll extends React.Component {
  constructor(){
    super();
    this.state = {
      poll: undefined
    }
    this.delete = this.delete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/polls/${this.props.params.pollid}`)
      .then(response => { this.setState({ poll: response.data });})
      .catch(err => console.error(err));
  }

  delete() {
    axios
      .delete(`/api/polls/${this.props.params.pollid}`)
      .catch(err => console.error(err));
  }

  handleSubmit(val){
    let pollid = this.props.params.pollid;
    let poll = this.state.poll;
    let filtered = poll.data.filter(d => (d.name === val)).length;
    filtered > 0 ? poll.data.map(d => {if (d.name == val) d.votes += 1;}) : poll.data.push({name: val, votes: 1});
    axios
      .put(`/api/polls/${pollid}`, poll)
      .then(response => {
        this.setState({
          poll: response.data
        });
      })
      .catch(err => console.error(err));
  }

  render () {
    if (this.state.poll) return (
      <Row>
        <Col md={3} mdOffset={2} sm={8} smOffset={2}>
          <h2>{this.state.poll.title}</h2>
          <Options data={this.state.poll.data} handleSubmit={this.handleSubmit} isLoggedIn={this.props.isLoggedIn} user={this.props.user}/>
          <hr />
          <SocialButtons url={`https://chrisaguilar-fcc-voting.herokuapp.com/${this.props.params.pollid}`}/>
          <br />
          {
            this.props.user ? (
              (this.props.user._id == this.state.poll.author) ?
                (<Button
                  bsStyle="danger"
                  href="/"
                  onClick={this.delete}
                  style={{width: "100%"}}>
                    <strong><Glyphicon glyph="trash" /> Delete</strong>
                </Button>
              ) : (null)
            ) : (null)
          }
        </Col>
        <Col md={5} mdOffset={0} sm={8} smOffset={2} style={{padding: "2em"}}>
          <PollChart data={this.state.poll.data} />
        </Col>
      </Row>
    );

    return (
      <Row>
        <Col md={8} mdOffset={2} sm={8} smOffset={2}>
          <h2>Loading ... </h2>
        </Col>
      </Row>
    );
  }
}
