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
        title="Username"
        subtitle="Industry"
        avatar= {<Avatar>{props.user}</Avatar>}
      />
      <CardMedia>
        <img src="http://via.placeholder.com/350x200" alt="" />
      </CardMedia>
      <CardTitle title="Username's Game" subtitle="Date Recorded: 09/25/2017" />
      <CardText>
        Cards in deck: Card 1, Card 2, Card 3, Card 4
      </CardText>
      <CardActions>
        <FlatButton label="Watch This Game" primary={true} fullWidth={true} href="videos/2"/>
      </CardActions>
    </Card>
    </Col>
  )
}

export default GameCard;
