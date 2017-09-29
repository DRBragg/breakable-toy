import React from 'react';
import { Col, Thumbnail, Button, Media } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';


class GameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depth: 1
    }
    this.onHover = this.onHover.bind(this)
    this.onLeave = this.onLeave.bind(this)
  }

  onHover(){
    this.setState({depth: 5})
  }

  onLeave(){
    this.setState({depth: 1})
  }

  render(){
  return(
    <Col lg={3} md={6} sm={12} className="index-card">
    <Card zDepth={this.state.depth} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
      <CardHeader
        title={this.props.user}
        subtitle="Industry"
        avatar= {<Avatar>{this.props.user.charAt(0)}</Avatar>}
      />
      <CardMedia>
        <video src={this.props.video.url} alt={this.props.user+"'s video"} />
      </CardMedia>
      <CardTitle
        title={this.props.user+"'s Game"}
        subtitle={"Date Recorded: "+this.props.game.recordedDate}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardText expandable={true}>
        Cards in deck: {
          this.props.game.cards[0].catagory+": "+this.props.game.cards[0].body+", "
          +this.props.game.cards[1].catagory+": "+this.props.game.cards[1].body+", "
          +this.props.game.cards[2].catagory+": "+this.props.game.cards[2].body+", "
          +this.props.game.cards[3].catagory+": "+this.props.game.cards[3].body}
      </CardText>
      <CardActions>
        <FlatButton label="Watch This Game" primary={true} fullWidth={true} href={"videos/"+this.props.game.id}/>
      </CardActions>
    </Card>
    </Col>
  )}
}

export default GameCard;
