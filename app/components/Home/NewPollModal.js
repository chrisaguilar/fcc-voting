import React from 'react';
import { Grid, Row, Col, Button, Modal, ListGroup, ListGroupItem, Glyphicon, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import shortid from 'shortid';
import axios from 'axios';

export default class NewPollModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      options: "",
      title: "",
      author: ""
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({
      showModal: false,
      options: "",
      title: "",
      author: ""
    });
  }

  handleSubmit() {
    let data = this.state.options.split(',').map(Function.prototype.call, String.prototype.trim);
    data = Array.from(new Set(data.filter(s => s != "")));
    data = data.map(o => {return {name: o.toString(), votes: 0}});

    let poll = {
      _id: shortid.generate(),
      author: this.props.user._id,
      title: this.state.title,
      data: data
    }

    if (!(poll.title == "") || !(poll.data == [{name: "", votes: 0}])) {
      axios
        .post('/api/polls', poll)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }

    this.setState({
      showModal: false,
      options: "",
      title: "",
      author: ""
    });

    this.props.refresh();
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleOptionChange(e) {
    this.setState({ options: e.target.value });
  }

  render() {
    return(
      this.props.isLoggedIn ? (
        <ListGroupItem className="text-center"style={{padding: "0"}}>
          <Button bsStyle="primary" block style={{borderTopRightRadius: "0", borderTopLeftRadius: "0"}} onClick={this.open}>
            <Glyphicon glyph="plus" />
          </Button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Add Poll</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Grid fluid>
                <form>
                  <FormGroup className="row">
                    <Col sm={12}>
                      <ControlLabel>Poll Title</ControlLabel>
                      <FormControl type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup className="row">
                    <Col sm={12}>
                      <ControlLabel>Poll Options</ControlLabel>
                      <FormControl type="text" placeholder="Options (separated,by,commas)" value={this.state.options} onChange={this.handleOptionChange} />
                    </Col>
                  </FormGroup>
                </form>
              </Grid>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ListGroupItem>
      ) : (null)
    );
  }
}
