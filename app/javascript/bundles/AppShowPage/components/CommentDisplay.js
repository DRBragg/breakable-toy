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
        <Media.Heading>{((props.comment.user.email).split('@')[0])}</Media.Heading>
        <p>{props.comment.body}</p>
      </Media.Body>
    </Media>
  )
}

export default CommentDisplay;
