import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class SocialButtons extends React.Component {
  render() {
    return (
      <ButtonGroup justified>
        <Button
          id="facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.url}`}
          target="_blank"
          className="share">
            <i className="fa fa-facebook"></i>
        </Button>
        <Button
          id="gplus"
          href={`https://plus.google.com/share?url=${this.props.url}`}
          target="_blank"
          className="share">
            <i className="fa fa-google-plus"></i>
        </Button>
        <Button
          id="linkedin"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//chrisaguilar-fcc-voting.herokuapp.com/poll/${this.props.url}&title=Free%20Code%20Camp%20Voting%20App&summary=&source=`}
          target="_blank"
          className="share">
            <i className="fa fa-linkedin"></i>
        </Button>
        <Button
          id="twitter"
          href="https://twitter.com/home?status=Check%20out%20this%20%40FreeCodeCamp%20voting%20app%20https%3A//chrisaguilar-fcc-voting.herokuapp.com/%20%23JavaScript%20%23LearnToCode"
          target="_blank"
          className="share">
            <i className="fa fa-twitter"></i>
        </Button>
      </ButtonGroup>
    );
  }
}
