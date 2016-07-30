import React from 'react';
import { Link } from 'react-router';
import { Row, Col, ListGroup, ListGroupItem, Glyphicon, Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//import AddPoll from '../components/AddPoll.js'

export default class Polls extends React.Component {
  constructor(){
    super();
    this.state = {
      polls: [],
      showModal: false
    }
  }

  componentDidMount() {
    fetch(`/api/polls`).then(response =>
      response.json()
    ).then(polls => {
      this.setState({ polls });
    }).catch(err => {
      console.log(err);
    });
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    let poll_list = this.state.polls.map(p =>
      <LinkContainer to={{pathname: `/poll/${p._id}`}} key={p._id}>
        <ListGroupItem>{p.title}</ListGroupItem>
      </LinkContainer>
    );
    return (
      <Row>
        <Col md={8} mdOffset={2}>
          <h2>Polls</h2>
          <ListGroup>
            {poll_list}
            <ListGroupItem className="text-center"style={{padding: "0"}}>
              <Button bsStyle="primary" block style={{borderTopRightRadius: "0", borderTopLeftRadius: "0"}} onClick={this.open.bind(this)}>
                <Glyphicon glyph="plus" />
              </Button>
            </ListGroupItem>
          </ListGroup>

          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Hello, World</h1>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    );
  }
}
