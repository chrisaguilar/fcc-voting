import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';


export default class Options extends React.Component {
  formChange(){
    document.getElementById("newBox").value="";
    let formValue = document.getElementById('options').value;
    if (formValue === 'new') document.getElementById("newBox").style.visibility='visible';
    else document.getElementById("newBox").style.visibility='hidden';
  }

  handleSubmit(e) {
    e.preventDefault();
    let formValue = document.getElementById('options').value;
    let val = (formValue == 'new') ? document.getElementById('newBox').value : formValue;
    if (val == "" || val == "a") return;
    document.getElementById('options').value='a';
    this.formChange();
    this.props.handleSubmit(val);
  }

  render() {
    let options = this.props.data.map((o, i) => <option key={i} value={o.name}>{o.name}</option>);
    return (
      <div>
        <InputGroup>
          <FormControl componentClass="select" id="options" defaultValue="a" onChange={this.formChange.bind(this)}>
            <option value="a" style={{display:"none"}}>Cast Your Vote</option>
            {options}
            {this.props.isLoggedIn ? (<option value="new">Add New Option</option>) : (null)}
          </FormControl>
          <InputGroup.Button>
            <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </InputGroup.Button>
        </InputGroup>
        <br/>
        <FormControl id="newBox" type="text" placeholder="Enter New Option" style={{visibility: "hidden"}}/>
      </div>
    );
  }
}
