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
    document.getElementById('newBox').value='';
    this.props.handleSubmit(val);
  }

  render() {
    let options = this.props.data.map((o, i) => <option key={i} value={o.name}>{o.name}</option>);
    return (
      <div>
        <Row>
          <InputGroup>
            <FormControl componentClass="select" id="options" defaultValue="a" onChange={this.formChange.bind(this)}>
              <option value="a" style={{display:"none"}}>Cast Your Vote</option>
              {options}
              <option value="new">Add New Option</option>
            </FormControl>
            <InputGroup.Button>
              <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </InputGroup.Button>
          </InputGroup>
        </Row>
        <Row>
          <br/>
          <FormControl id="newBox" type="text" placeholder="Enter New Option" style={{visibility: "hidden"}}/>
        </Row>
      </div>
    );
  }
}
