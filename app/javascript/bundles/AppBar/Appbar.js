import React from 'react';
import { Navbar, Nav, NavItem, Badge, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const tooltip = (
  <Tooltip id="tooltip">3 New comments on your games</Tooltip>
);

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignUp: false,
      loggedIn: sessionStorage.getItem('id'),
      open: false
    }

    this.close = this.close.bind(this)
    this.openSignUp = this.openSignUp.bind(this)
    this.openLogIn = this.openLogIn.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  handleLogin() {
    this.setState({ loggedIn: true });
  }

  signOut() {
    fetch('/sessions/'+sessionStorage.getItem('id'), {
      method: 'DELETE',
      headers: {
        'X-User-Email': sessionStorage.getItem('email'),
        'X-User-token': sessionStorage.getItem('token')
      },
      credentials: 'same-origin'
    }).then(response => {
      if (response.ok) {
        sessionStorage.clear();
        this.setState({loggedIn: false});
      }
    })
  }

  close() {
    this.setState({ showLogin: false, showSignUp: false});
  }

  openSignUp() {
    this.setState({ showSignUp: true });
  }

  openLogIn() {
    this.setState({ showLogin: true });
  }

  render() {
    return(
      <div>
      <AppBar
        title="Interview Game"
        iconElementRight={this.state.loggedIn ? <FlatButton onClick={this.signOut} label="Sign Out" /> : <FlatButton onClick={this.openLogIn} label="Log In" />}
        onLeftIconButtonTouchTap={(open) => this.setState({open: true})}
      />
      <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>New Game</MenuItem>
          <MenuItem onClick={this.handleClose}>My Games</MenuItem>
        </Drawer>
        <Modal show={this.state.showLogin} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm login={this.handleLogin} close={this.close}/>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.showSignUp} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignUpForm login={this.handleLogin} close={this.close}/>
          </Modal.Body>
        </Modal>
        </div>
    )
  }
}

export default Appbar;
