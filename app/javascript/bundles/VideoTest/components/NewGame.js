import React from 'react';
import Webcam from './Webcam';
import CardView from './CardView';
import RecordRTC from 'recordrtc';
import { Grid, Row, Col, Button, ButtonToolbar, FormGroup, FormControl, InputGroup, Alert} from 'react-bootstrap';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import DeckStepper from './DeckStepper';
import Redirect from './Redirect'
import ReactLoading from 'react-loading';

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
      saving: false,
      saved: false
    };
    this.requestUserMedia = this.requestUserMedia.bind(this)
    this.startRecord = this.startRecord.bind(this)
    this.stopRecord = this.stopRecord.bind(this)
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
    });
  }

  //the an RecordRTC instence to state and call it to start recording
  startRecord() {
    this.captureUserMedia((stream) => {
      let options = { type: 'video' }
      this.setState({ recordVideo: RecordRTC(stream, options), recording: true });
      this.state.recordVideo.startRecording();
    });
  }

  //on recording stop call stopRecording from RecordRTC in state
  stopRecord() {
    this.setState({saving: true, recording: false})
    this.state.recordVideo.stopRecording(() => {
      let recordedBlob = this.state.recordVideo.getBlob();
      let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json , */*', 'X-User-Email': sessionStorage.getItem('email'), 'X-User-token': sessionStorage.getItem('token')});
      fetch(`/users/${sessionStorage.getItem('id')}/videos`, {
        method: "POST",
        headers: header,
        credentials: 'same-origin',
        body: recordedBlob
      }).then(response => {
        if (response.ok) {
          let savedVideo = response.json();
          return savedVideo
        }
      }).then(savedVideo => {
        this.setState({ saving: false, saved: savedVideo.id });
      });
    });
  }

  render() {
    if (sessionStorage.getItem('id')) {
    return(
      <Grid>
        <Row>
          <Col xs={12} className="text-center">
            <h1>New Game</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={3}>
            <Webcam src={this.state.src}/>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={3} xs={12} className="text-center">
            {!this.state.recording && !this.state.saving && !this.state.saved && <RaisedButton label="Start Game" secondary={true} onClick={this.startRecord}/>}
            {this.state.recording && <DeckStepper deck={this.props.deck} finish={this.stopRecord}/> }
            {this.state.saving && <Col xs={1} xsOffset={5}> <ReactLoading type={'balls'} color={'#ff9e08'}/> </Col>}
            {this.state.saved && <RaisedButton label="View Game" primary={true} href={"/videos/"+this.state.saved}/>}
          </Col>
        </Row>
        <Row>
          <Snackbar
            open={this.state.recording}
            message="Recording"
            autoHideDuration={2000}
            onRequestClose={this.handleRequestClose}
          />
        </Row>
      </Grid>
    )
  } else {
    return (
      <Redirect />
    )
  }
  }
}

export default VideoTest;
