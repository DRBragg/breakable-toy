import React from 'react';
import { Col, Thumbnail, Button, Media } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';


const GameCard = (props) => {
  return(
    <Col md={3} className="index-card">
    <Card>
      <CardHeader
        title={props.user}
        subtitle="Industry"
        avatar= {<Avatar>{props.user.charAt(0)}</Avatar>}
      />
      <CardMedia>
        <video src={props.video.url} alt="" />
      </CardMedia>
      <CardTitle title={props.user+"'s Game"} subtitle={"Date Recorded: "+props.game.recordedDate} />
      <CardText>
        Cards in deck: {
          props.game.cards[0].catagory+": "+props.game.cards[0].body+", "
          +props.game.cards[1].catagory+": "+props.game.cards[1].body+", "
          +props.game.cards[2].catagory+": "+props.game.cards[2].body+", "
          +props.game.cards[3].catagory+": "+props.game.cards[3].body}
      </CardText>
      <CardActions>
        <FlatButton label="Watch This Game" primary={true} fullWidth={true} href={"videos/"+props.game.id}/>
      </CardActions>
    </Card>
    </Col>
  )
}

export default GameCard;
