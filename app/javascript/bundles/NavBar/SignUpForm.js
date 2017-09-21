import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
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
    let formPayload = {email: this.state.email, password: this.state.password, password_confirmation: this.state.passwordConfirmation}
    fetch("/users", {
      method: "POST",
      headers: header,
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    }).then(response => {
      if (response.ok) {
        let user = response.json();
        return user
      } else {
        console.log('didnt save');
        this.setState({error: true});
      }
    }).then(user => {
      console.log('user:', user);
      // sessionStorage.setItem('id', user.id);
      // sessionStorage.setItem('email', user.email);
      // this.clearForm();
    })
  }

  clearForm(){
    this.setState({ email: '', password: '', passwordConfirmation: '' })
    this.props.login();
    this.props.close();
  }

  getValidationState(){
    const length = this.state.password.length;
    if (length > 6) return 'success';
    else if (length > 0) return 'error';
  }

  getPasswordConfirmationValidationState(){
    const password = this.state.passwordConfirmation;
    if (password === "") return null;
    else if (password === this.state.password) return 'success';
    else if (password !== this.state.password) return 'error';
  }

  render() {
    let disabled;

    if (this.state.email != '' && this.state.password != '' && this.state.passwordConfirmation != '') {
      disabled = false
    } else {
      disabled = true
    }

    return (
      <form>
      {this.state.error &&
      <Alert bsStyle="danger">
        Something went Wrong
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
        <FormGroup validationState={this.getValidationState()}>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Password must be greater than 6 characters</HelpBlock>
        </FormGroup>
        <FormGroup validationState={this.getPasswordConfirmationValidationState()}>
          <ControlLabel>Password Confirmation</ControlLabel>
          <FormControl
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            placeholder="Password Confirmation"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Passwords must match</HelpBlock>
        </FormGroup>
        <Button type='submit' onClick = {this.handleSubmit} disabled={disabled}>
          Sign Up
        </Button>
      </form>
    );
  }
}

export default SignUpForm;