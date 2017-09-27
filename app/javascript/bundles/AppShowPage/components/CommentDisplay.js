import React from 'react';
import { Media } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';

const CommentDisplay = (props) => {
  return (
    <Media>
      <Media.Left>
        <Avatar>U</Avatar>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Username</Media.Heading>
        <p>Comment body. Comment body. Comment body. Comment body. Comment body. Comment body. Comment body.</p>
      </Media.Body>
    </Media>
  )
}

export default CommentDisplay;
