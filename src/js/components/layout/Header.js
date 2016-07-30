import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class Head extends React.Component {
  render () {
    return (
      <Row>
        <Col md={8} mdOffset={2}>
          <Navbar fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">FCC Voting</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <IndexLinkContainer to={{pathname: '/'}}>
                  <NavItem eventKey={1}>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to={{pathname: '/login'}}>
                  <NavItem eventKey={2}>Login</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/signup'}}>
                  <NavItem eventKey={3}>Sign Up</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}
