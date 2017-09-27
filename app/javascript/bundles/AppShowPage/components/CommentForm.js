import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'});
    let formPayload = {user_id: sessionStorage.getItem('id'), game_id: this.props.gameId, body: this.state.body}
    fetch(`${window.location.pathname}/comments`, {
      method: "POST",
      headers: header,
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    }).then(response => {
      if (response.ok) {
        console.log('Handle new comment');
      } else {
        console.log('wrong credentials');
      }
    })
  }

  clearForm(){
    this.setState({body: ''})
  }

  render() {
    let disabled;

    if (this.state.body != '') {
      disabled = false
    } else {
      disabled = true
    }

    return (
      <form>
        <FormGroup>
          <ControlLabel>Comment</ControlLabel>
          <FormControl
            type="text"
            name="body"
            value={this.state.body}
            placeholder="Add a comment"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FlatButton label="Add Comment" primary={true} onClick={this.handleSubmit} disabled={disabled}/>
      </form>
    );
  }
}

export default CommentForm;
