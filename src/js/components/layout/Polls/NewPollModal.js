import React from 'react';
import { Grid, Row, Col, Button, Modal, ListGroup, ListGroupItem, Glyphicon, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class NewPollModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      options: "",
      title: ""
    }
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({
      showModal: false,
      options: "",
      title: ""
    });
  }

  handleSubmit() {
    this.props.add(this.state.title, this.state.options);
    this.setState({
      showModal: false,
      options: "",
      title: ""
    });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleOptionChange(e) {
    this.setState({ options: e.target.value });
  }

  render() {
    return (
      <ListGroupItem className="text-center"style={{padding: "0"}}>
        <Button bsStyle="primary" block style={{borderTopRightRadius: "0", borderTopLeftRadius: "0"}} onClick={this.open.bind(this)}>
          <Glyphicon glyph="plus" />
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Poll</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid fluid>
              <form>
                <FormGroup className="row">
                  <Col sm={12}>
                    <ControlLabel>Poll Title</ControlLabel>
                    <FormControl type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Col sm={12}>
                    <ControlLabel>Poll Options</ControlLabel>
                    <FormControl type="text" placeholder="Options (separated,by,commas)" value={this.state.options} onChange={this.handleOptionChange.bind(this)} />
                  </Col>
                </FormGroup>
              </form>
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ListGroupItem>
    );
  }
}
