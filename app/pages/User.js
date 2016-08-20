import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

  componentWillMount() {
    axios
      .get(`/api/user/${this.props.params.userid}`)
      .then(response => this.setState({ userData: response.data }))
      .catch(error => console.error(error));
  }

  render () {
    const list_items = this.state.userData.map(d =>
      <LinkContainer to={{pathname: `/poll/${d._id}`}} key={d._id}>
        <ListGroupItem>{d.title}</ListGroupItem>
      </LinkContainer>
    );

    return (
      <Row>
        <Col sm={12} md={8} mdOffset={2}>
          <h2>Polls You've Created</h2>
          <ListGroup>
            {list_items}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
