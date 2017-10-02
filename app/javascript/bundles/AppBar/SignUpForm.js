import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      industy: "",
      password: "",
      passwordConfirmation: "",
      file: "",
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
    let formPayload = {user:{email: this.state.email, username: this.state.username, industry: this.state.industry, password: this.state.password, password_confirmation: this.state.passwordConfirmation}}
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
        this.setState({error: true});
      }
    }).then(user => {
      sessionStorage.setItem('id', user.id);
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('token', user.authentication_token);
      this.clearForm(user.admin);
    })
  }

  clearForm(admin){
    this.setState({ email: '', username: '', industry: '', password: '', passwordConfirmation: '' })
    this.props.login(admin);
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
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Industry</ControlLabel>
          <FormControl
            type="text"
            name="industry"
            value={this.state.industry}
            placeholder="Industry"
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
