import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

import PollChart from "../components/layout/Poll/PollChart";
import Options from "../components/layout/Poll/Options";

export default class Poll extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "",
      poll_options: [],
      chart_data: [],
      chart: ""
    }
  }
  componentDidMount(){
    fetch(`/api/polls/${this.props.params.pollid}`).then(response =>
      response.json()
    ).then(p => {
      let poll = p[0];
      let title = poll.title;
      poll.data.sort((a,b) => (b.votes - a.votes));
      let poll_options = poll.data.map(p => p.name);
      let chart_data = poll.data.map(p => p.votes);
      let chart = <PollChart data={chart_data} labels={poll_options}/>

      this.setState({ title, poll_options, chart_data, chart });

    }).catch(err => {
      console.log(err);
    });
  }

  handleSubmit(val){
    console.log(val);
  }

  render () {
    return (
      <Row>
        <Col md={4} mdOffset={2} sm={8} smOffset={2}>
          <h2>{this.state.title}</h2>
          <Options options={this.state.poll_options} handleSubmit={this.handleSubmit.bind(this)}/>
          <hr />
          <ButtonGroup justified>
            <Button id="facebook" href="#"><i className="fa fa-facebook"></i></Button>
            <Button id="gplus" href="#"><i className="fa fa-google-plus"></i></Button>
            <Button id="linkedin" href="#"><i className="fa fa-linkedin"></i></Button>
            <Button id="twitter" href="#"><i className="fa fa-twitter"></i></Button>
          </ButtonGroup>
        </Col>
        <Col md={4} mdOffset={0} sm={8} smOffset={2} style={{padding: "2em"}}>
            {this.state.chart}
        </Col>
      </Row>
    );
  }
}

/*
Facebook Blue: #3B5998
Google Plus Red: #DD4B39
LinkedIn Blue: #0077B5
Twitter Blue: #1DA1F2
*/
