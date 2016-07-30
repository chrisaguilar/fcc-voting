import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

import PollChart from "../components/layout/Poll/PollChart";
import Options from "../components/layout/Poll/Options";

export default class Poll extends React.Component {
  constructor(){
    super();
    this.state = {
      poll: {
        title: "",
        data: []
      }
    }
  }
  componentDidMount(){
    fetch(`/api/polls/${this.props.params.pollid}`
    ).then(response => response.json()
    ).then(poll => this.setState({ poll: poll[0] })
    ).catch(err => console.log(err));
  }

  handleSubmit(val){
    let pollid = this.props.params.pollid;
    let newPoll = this.state.poll;
    newPoll.data.map(d => {if (d.name == val) d.votes++});

    fetch(`/api/polls/${pollid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPoll)
    }).then(response => response.json()).then(poll => {
      this.setState({poll: newPoll});
    })
  }

  render () {
    return (
      <Row>
        <Col md={4} mdOffset={2} sm={8} smOffset={2}>
          <h2>{this.state.poll.title}</h2>
          <Options data={this.state.poll.data} handleSubmit={this.handleSubmit.bind(this)}/>
          <hr />
          <ButtonGroup justified>
            <Button id="facebook" href="#"><i className="fa fa-facebook"></i></Button>
            <Button id="gplus" href="#"><i className="fa fa-google-plus"></i></Button>
            <Button id="linkedin" href="#"><i className="fa fa-linkedin"></i></Button>
            <Button id="twitter" href="#"><i className="fa fa-twitter"></i></Button>
          </ButtonGroup>
        </Col>
        <Col md={4} mdOffset={0} sm={8} smOffset={2} style={{padding: "2em"}}>
            <PollChart data={this.state.poll.data}/>
        </Col>
      </Row>
    );
  }
}
