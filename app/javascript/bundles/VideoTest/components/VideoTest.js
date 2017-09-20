import React from 'react';
import Webcam from './Webcam';
import CardView from './CardView';
import newGame from './AppUtils';
import RecordRTC from 'recordrtc';
import { Grid, Row, Col, Button, ButtonToolbar, FormGroup, FormControl, InputGroup } from 'react-bootstrap';

//ensure the users browser supposort gUM
const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class VideoTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordVideo: null,
      src: null,
      recording: false,
      upload: null,
      video: null,
      gameType: "",
      currentCard: this.props.deck
    };
    this.requestUserMedia = this.requestUserMedia.bind(this)
    this.startRecord = this.startRecord.bind(this)
    this.stopRecord = this.stopRecord.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.getNewCard = this.getNewCard.bind(this)
  }

  //alert user on Mount if their browser does not support gUM
  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  //get users permission to record audio and video
  captureUserMedia(callback) {
    let params = { audio: true, video: true };

    navigator.getUserMedia(params, callback, (error) => {
      alert(JSON.stringify(error));
    });
  };

  //feed the stream to state once users allows access so it can be diplayed with Webcam component
  requestUserMedia() {
    this.captureUserMedia((stream) => {
      this.setState({ src: window.URL.createObjectURL(stream) });
      console.log('setting state', this.state)
    });
  }

  //the an RecordRTC instence to state and call it to start recording
  startRecord() {
  console.log('recording started');
    this.captureUserMedia((stream) => {
      let options = { type: 'video' }
      // if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
      //   options = {
      //     mimeType: 'video/webm;codecs=vp9'
      //   };
      // } else {
      //   options = {
      //     mimeType: 'video/webm;codecs=vp8'
      //   }
      // }
      this.setState({ recordVideo: RecordRTC(stream, options), recording: true });
      this.state.recordVideo.startRecording();
    });
  }

  //on recording stop call stopRecording from RecordRTC in state
  stopRecord() {
    console.log('recording stopped')
    this.state.recordVideo.stopRecording(() => {
      let recordedBlob = this.state.recordVideo.getBlob();
      console.log('Blob', recordedBlob);
      let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json , */*'});
      fetch("/videos", {
        method: "POST",
        headers: header,
        credentials: 'same-origin',
        body: recordedBlob
      }).then(response => {
        console.log('response', response.json());
      })
      this.setState({ upload: true, recording: false });
    });
  }

  //this method will fetch a new card when clicked
  getNewCard() {
    let currentDeck = this.state.deck
    let nextCard = currentDeck.shift()
    this.setState({ deck: currentDeck, currentCard: nextCard })
  }

  // handleChange(e){
  //   setGame = e.target.value;
  //   setDeck = this.state.deck;
  //   this.setState({ gameType:  })
  // }

  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} className="text-center">
            <h1>New Game</h1>
          </Col>
          <Col xs={12} className="text-center">
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  Select the number of cards you want to play with
                </InputGroup.Addon>
                <FormControl componentClass="select" value={this.state.gameType} onChange={this.handleChange}>
                  <option value=""> </option>
                  <option value="1">1 - Random card</option>
                  <option value="2.1">2 - 1 Opener card & 1 Closer card</option>
                  <option value="2.2">2 - 1 Opener card & 1 Question card</option>
                  <option value="2.3">2 - 1 Question card & 1 Closer card</option>
                  <option value="3">3 - 1 Opener card, 1 Question card, & 1 Closer card</option>
                  <option value="4">4 - 1 Opener card, 1 Question card, 1 Personal card, & 1 Closer card</option>
                  <option value="5">5 - 1 Opener card, 2 Question cards, 1 Personal card, & 1 Closer card</option>
                </FormControl>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={4} xsOffset={1} className="text-center">
            <CardView card={this.state.currentCard}/>
          </Col>
          <Col xs={6} xsOffset={1}>
            <Webcam src={this.state.src}/>
          </Col>
        </Row>
        <Row>
        <Col xs={4} xsOffset={1} className="text-center">
          <Button onClick={this.getNewCard} disabled={this.state.recording}>Next Card</Button>
        </Col>
          <Col xs={6} xsOffset={1} className="text-center">
            <ButtonToolbar>
              <Button bsStyle="success" onClick={this.startRecord} disabled={this.state.recording}>Start Record</Button>
              <Button bsStyle="danger" onClick={this.stopRecord} disabled={!this.state.recording}>Stop Record</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default VideoTest;
