import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
      comments: this.props.comments
    }
  }

  render() {
    console.log('current props', this.props);
    return(
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2}>
            <Card>
              <CardHeader
                title={this.props.user}
                subtitle="Industry"
                avatar= {<Avatar>U</Avatar>}
              />
              <CardMedia>
                <div className="embed-responsive embed-responsive-4by3">
                  <video controls className="embed-responsive-item">
                    <source src={"http://localhost:3000"+this.props.game.vid.url} type="video/mp4"/>
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
              <CardText>
                <CommentForm gameId={this.props.game.id} />
              </CardText>
              <CardActions>
                <FlatButton label="Comment on this game" primary={true} fullWidth={true}/>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2} className="text-center">
            <h3>Comments</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <CommentsGroup comments={this.state.comments} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UserGameCard;
