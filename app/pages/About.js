import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class About extends React.Component {
  render() {
    return (
      <Row>
        <Col className="text-center">
          <h1><strong>Free Code Camp Polls</strong></h1>
          <h3>About</h3>
        </Col>
        <Col sm={8} smOffset={2}>
          <p>This is a voting app created for <a href="https://freecodecamp.com">Free Code Camp's</a> first dynamic web project. The goal was to create a web app that allows users to view, create, delete, and vote in polls.</p>
          <p>This voting app is a single-page app that uses <a href="https://nodejs.org" target="_blank">Node</a> and <a href="https://expressjs.com" target="_blank">Express</a> to serve the page from <a href="https://heroku.com" target="_blank">Heroku's</a> servers, <a href="http://mongoosejs.com" target="_blank">Mongoose</a> and <a href="https://mlab.com" target="_blank">mLab</a> to store the data, <a href="http://passportjs.org" target="_blank">Passport.js</a> to allow logging in, <a href="https://github.com/reactjs/react-router" target="_blank">React-Router</a> to allow single-page navigation, <a href="http://www.chartjs.org/" target="_blank">Chart.js</a> to draw the poll charts, and <a href="https://facebook.github.io/react/" target="_blank">React</a> to tie all of these things together and present it to users.</p>
          <p>To vote in a poll, simply click the desired poll and use the dropdown box to select which option you'd like to vote for, and click submit.</p>
          <p>If you'd like to add a new option to a poll, login with a social media account and select "Add New Option" from the poll's dropdown box; once you're satisfied with your new option, just click submit.</p>
          <p>To add a new poll, you must first login with a social media account, and then click the "Add Poll" button at the bottom of the poll list on either the home page, or your user page.</p>
          <p>To delete a poll you've created, visit the poll you wish to delete, and then click the red "Delete" button.</p>
          <p>You can share polls by clicking on one of the various share buttons on each poll's page.</p>
        </Col>
      </Row>
    );
  }
}
