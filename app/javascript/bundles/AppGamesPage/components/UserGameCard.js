import React from 'react';
import { Col, Thumbnail, Button, Media } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


class GameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      open: false
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

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleDelete = () => {
    fetch(`${window.location.pathname}/videos/${this.props.game.id}`, {
      method: 'Delete',
      headers: {
        'X-User-Email': sessionStorage.getItem('email'),
        'X-User-token': sessionStorage.getItem('token')
      },
      credentials: 'same-origin'
    }).then(response => {
      if (response.ok) {
        this.setState({open: false});
        this.props.dropGame(this.props.game.id)
      }
    })
  };

  render() {
    const actions = [
      <FlatButton
        label="Delete"
        primary={true}
        onClick={this.handleDelete}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

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
          <FlatButton label="Delete" onClick={this.handleOpen} />
          </CardActions>
        </Card>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete this game?
        </Dialog>
      </Col>

    );
  }
}

export default GameCard;
