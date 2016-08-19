import React from 'react';
import { Button, ButtonGroup, Col, Grid, Modal, NavItem, Row } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <NavItem onClick={this.open}>
        Login
        <Modal bsSize="small" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button id="facebook" href="/auth/facebook" className="login">
              <i className="fa fa-facebook"></i><br />Facebook
            </Button>
            <Button id="github" href="/auth/github" className="login">
              <i className="fa fa-github"></i><br />GitHub
            </Button>
            <Button id="gplus" href="/auth/gplus" className="login">
                <i className="fa fa-google-plus"></i><br />Google+
            </Button>
            <Button id="twitter" href="/auth/twitter" className="login">
                <i className="fa fa-twitter"></i><br />Twitter
            </Button>
          </Modal.Body>
        </Modal>
      </NavItem>
    );
  }
}
