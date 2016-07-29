//Poll options go here

import React from 'react';

export default class Options extends React.Component {
  render() {
    let options = this.props.options.map((o, i) => <option key={i}>{o}</option>);
    let styles = {

    };
    return (
      <div class="form-group">
        <select defaultValue="a" className="form-control" id="options">
          <option value="a" style={{display:"none"}}>Cast Your Vote</option>
          {options}
          <option>Add New Option</option>
        </select>
        <hr />
        <button className="btn btn-block btn-primary">Submit</button>
        <br/>
        <button className="btn btn-block">Share</button>
      </div>
    );
  }
}
