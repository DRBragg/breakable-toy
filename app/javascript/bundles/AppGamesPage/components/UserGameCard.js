import React from 'react';
import { Col, Thumbnail, Button, Media } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';


class GameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  render() {
    return(
      <Col xs={8} xsOffset={2} className="index-card">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title="Video Title"
            subtitle={"Recorded on: "+this.props.game.recordedDate}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardMedia
            expandable={true}
            overlay={<CardTitle title="Cards in Deck:" subtitle={
              this.props.game.cards[0].catagory+": "+this.props.game.cards[0].body+", "
              +this.props.game.cards[1].catagory+": "+this.props.game.cards[1].body+", "
              +this.props.game.cards[2].catagory+": "+this.props.game.cards[2].body+", "
              +this.props.game.cards[3].catagory+": "+this.props.game.cards[3].body} />}
          >
            <video src={this.props.game.video.url} alt=""/>
          </CardMedia>
          <CardActions>
          <FlatButton label="Go to" href={"http://localhost:3000/videos/"+this.props.game.id} />
          <FlatButton label="Delete" onClick={this.handleReduce} />
          </CardActions>
        </Card>
      </Col>
    );
  }
}

export default GameCard;
