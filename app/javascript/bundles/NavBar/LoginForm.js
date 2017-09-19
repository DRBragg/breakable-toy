import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false
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
    let formPayload = {email: this.state.email, password: this.state.password}
    fetch("/sessions", {
      method: "POST",
      headers: header,
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    }).then(response => {
      if (response.ok) {
        console.log('response', response.json());
        this.clearForm();
      } else {
        console.log('wrong credentials');
        this.setState({error: true});
      }
    })
  }

  clearForm(){
    this.setState({email: '', password: ''})
    this.props.close();
  }

  render() {
    let disabled;

    if (this.state.email != '' && this.state.password != '') {
      disabled = false
    } else {
      disabled = true
    }

    return (
      <form>
      {this.state.error &&
      <Alert bsStyle="danger">
        Wrong Email/Password!
      </Alert>}
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type='submit' onClick = {this.handleSubmit} disabled={disabled}>
          Sign In
        </Button>
      </form>
    );
  }
}

export default LoginForm;
