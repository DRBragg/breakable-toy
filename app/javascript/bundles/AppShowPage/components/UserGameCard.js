import React from 'react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import CommentForm from './CommentForm';
import CommentsGroup from './CommentsGroup';


class UserGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
      comments: this.props.comments,
      showCommentForm: false
    }
    this.showForm = this.showForm.bind(this)
    this.handleNewComment =this.handleNewComment.bind(this)
  }

  showForm(){
    this.setState({showCommentForm: true})
  }

  handleNewComment(newComment) {
    let comments = this.state.comments
    let updatedComments = comments.concat([newComment])
    this.setState({comments: updatedComments, showCommentForm: false})
  }

  render() {
    return(
      <Grid>
        <Row>
          <Col lg={8} lgOffset={2}>
            <br/>
            <Card>
              <CardHeader
                title={this.props.user}
                subtitle="Industry"
                avatar= {<Avatar>{this.props.user.charAt(0)}</Avatar>}
              />
              <CardMedia>
                <div className="embed-responsive embed-responsive-4by3">
                  <video controls className="embed-responsive-item">
                    <source src={this.props.game.vid.url} type="video/mp4"/>
                  </video>
                </div>
              </CardMedia>
              <CardText>
                Date Recorded: {this.props.game.created_at} <br/>
                Cards in Deck: {
                  this.props.deck[0].catagory+": "+this.props.deck[0].body+", "
                  +this.props.deck[1].catagory+": "+this.props.deck[1].body+", "
                  +this.props.deck[2].catagory+": "+this.props.deck[2].body+", "
                  +this.props.deck[3].catagory+": "+this.props.deck[3].body}
              </CardText>
              <CardText className="text-center">
                {this.state.showCommentForm && !sessionStorage.getItem('id') && <Alert bsStyle="danger">Please Sign in to comment</Alert>}
                {this.state.showCommentForm && sessionStorage.getItem('id') && <CommentForm gameId={this.props.game.id} submit={this.handleNewComment} />}
              </CardText>
              <CardActions>
                <FlatButton label="Comment on this game" primary={true} fullWidth={true} onClick={this.showForm} />
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={8} lgOffset={2} className="text-center">
            <h3>Comments</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={8} lgOffset={2}>
            <CommentsGroup comments={this.state.comments} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UserGameCard;
