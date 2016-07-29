//Page for each individual poll
//Get poll ID from URL parameter poll/:pollID and search database for poll
//Use database info to create page

import React from 'react';

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
      let poll_options = poll.data.map(p => p.name);
      let chart_data = poll.data.map(p => p.votes);
      let chart = <PollChart data={chart_data} labels={poll_options}/>

      this.setState({ title, poll_options, chart_data, chart });

    }).catch(err => {
      console.log(err);
    });
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="col-md-6">
          <h2>{this.state.title}</h2>
          <Options options={this.state.poll_options}/>
        </div>
        <div className="col-md-6">
          {this.state.chart}
        </div>
      </div>
    );
  }
}
