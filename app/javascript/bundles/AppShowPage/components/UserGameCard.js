import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';


const UserGameCard = (props) => {
  return(
    <Grid>
    <Row>
    <Col xs={8} xsOffset={2}>
    <Card>
      <CardHeader
        title="Username"
        subtitle="Industry"
        avatar= {<Avatar>U</Avatar>}
      />
      <CardMedia>
      <div className="embed-responsive embed-responsive-4by3">
        <video controls className="embed-responsive-item">
          <source src={"http://localhost:3000"+props.game.vid.url} type="video/mp4"/>
        </video>
      </div>
      </CardMedia>
      <CardText>
        Date Recorded: 09/25/2017 <br/>
        Cards in deck: Card 1, Card 2, Card 3, Card 4
      </CardText>
      <CardActions>
        <FlatButton label="Comment on this game" primary={true} fullWidth={true}/>
      </CardActions>
    </Card>
    </Col>
    </Row>
    </Grid>
  )
}

export default UserGameCard;
