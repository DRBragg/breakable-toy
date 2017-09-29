import React from 'react';
import { Media } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const style = {
  margin: 20,
  padding: 20
};

const CommentDisplay = (props) => {
  return (
    <Paper style={style} zDepth={1} className="card">
    <Media>
      <Media.Left>
        <Avatar>{props.comment.user.username.charAt(0)}</Avatar>
      </Media.Left>
      <Media.Body>
        <Media.Heading>{props.comment.user.username}</Media.Heading>
        <p>{props.comment.body}</p>
      </Media.Body>
    </Media>
    </Paper>
  )
}

export default CommentDisplay;
