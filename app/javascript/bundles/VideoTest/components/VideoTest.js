import React from 'react';
import Webcam from './Webcam';
import CardView from './CardView';
import RecordRTC from 'recordrtc';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

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
      video: null
    };

    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
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
      let options;
      if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
        options = {
          mimeType: 'video/webm;codecs=vp9'
        };
      } else {
        options = {
          mimeType: 'video/webm;codecs=vp8'
        }
      }
      this.setState({ recordVideo: RecordRTC(stream, options), recording: true });
      this.state.recordVideo.startRecording();
    });
  }

  //on recording stop call stopRecording from RecordRTC in state
  stopRecord() {
    console.log('recording stopped')
    this.state.recordVideo.stopRecording(() => {
      let recordedBlob = this.state.recordVideo.getBlob();
      let blobURL = URL.createObjectURL(recordedBlob);
      console.log('Blob', blobURL);
      this.setState({ upload: true, recording: false, video: blobURL });
    });
  }

  //this method will fetch a new card when clicked
  getNewCard() {
    window.alert("This will fetch a new card")
  }

  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} className="text-center">
            <h1>The Interview Game</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6} xsOffset={3}>
            <div><Webcam src={this.state.src}/></div>
            <CardView/>
          </Col>
        </Row>
        <Row>
        <Col xs={3} xsOffset={3}>
          <Button onClick={this.getNewCard} disabled={this.state.recording}>New Card</Button>
        </Col>
          <Col xs={3} xsOffset={1}>
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
