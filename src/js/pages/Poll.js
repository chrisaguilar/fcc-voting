import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

import Options from "../components/layout/Poll/Options";
import PollChart from "../components/layout/Poll/PollChart";
import SocialButtons from "../components/layout/Poll/SocialButtons";

export default class Poll extends React.Component {
  constructor(){
    super();
    this.state = {
      poll: undefined
    }
  }

  componentDidMount() {
    fetch(`/api/polls/${this.props.params.pollid}`).then(response =>
      response.json()
    ).then(poll => {
      this.setState({poll: poll[0]});
    }).catch(err => {
      console.log(err);
    });
  }

  handleSubmit(val){
    let pollid = this.props.params.pollid;
    let poll = this.state.poll;
    let filtered = poll.data.filter(d => (d.name === val)).length;
    filtered > 0 ? poll.data.map(d => {if (d.name == val) d.votes += 1;}) : poll.data.push({name: val, votes: 1});
    fetch(`/api/polls/${pollid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(poll)
    }).then(response => response.json()).then(poll => {
      this.setState({poll});
    });
  }

  render () {
    if (this.state.poll) return (
      <Row>
        <Col md={3} mdOffset={2} sm={8} smOffset={2}>
          <h2>{this.state.poll.title}</h2>
          <Options data={this.state.poll.data} handleSubmit={this.handleSubmit.bind(this)}/>
          <hr />
          <SocialButtons url={`https://chrisaguilar-fcc-voting.herokuapp.com/${this.props.params.pollid}`}/>
        </Col>
        <Col md={5} mdOffset={0} sm={8} smOffset={2} style={{padding: "2em"}}>
          <PollChart data={this.state.poll.data} />
        </Col>
      </Row>
    );

    return (
      <Row>
        <Col md={8} mdOffset={2} sm={8} smOffset={2}>
          <h1>Loading ... </h1>
        </Col>
      </Row>
    );
  }
}
