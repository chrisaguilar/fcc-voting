import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Glyphicon, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Polls extends React.Component {
  constructor(){
    super();
    this.state = {
      polls: []
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

  render() {
    let poll_list = this.state.polls.map(p =>
      <LinkContainer to={{pathname: `/poll/${p._id}`}} key={p._id}>
        <ListGroupItem>{p.title}</ListGroupItem>
      </LinkContainer>
    );
    return (
      <div>
        <h2>Polls</h2>
        <ListGroup>
          {poll_list}
          <ListGroupItem className="text-center" onClick={this.NewPoll} style={{padding: "0"}}>
            <Button bsStyle="primary" block style={{borderTopRightRadius: "0", borderTopLeftRadius: "0"}}>
              <Glyphicon glyph="plus" />
            </Button>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
