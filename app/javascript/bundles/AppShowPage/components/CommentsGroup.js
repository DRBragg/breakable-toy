import React from 'react';
import { Row } from 'react-bootstrap';
import CommentDisplay from './CommentDisplay';


const CommentsGroup = (props) => {
  let userComments = props.comments.map(comment => {
    return(
      <CommentDisplay key={comment.id} comment={comment} />
    )
  })

  return(
    <div style={{marginBottom: 10}}>
      {userComments}
    </div>
  )
}

export default CommentsGroup
