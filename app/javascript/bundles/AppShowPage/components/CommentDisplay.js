import React from 'react';
import { Media } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';

const CommentDisplay = (props) => {
  return (
    <Media>
      <Media.Left>
        <Avatar>{props.comment.user.username.charAt(0)}</Avatar>
      </Media.Left>
      <Media.Body>
        <Media.Heading>{props.comment.user.username}</Media.Heading>
        <p>{props.comment.body}</p>
      </Media.Body>
    </Media>
  )
}

export default CommentDisplay;
