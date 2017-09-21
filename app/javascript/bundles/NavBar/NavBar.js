import React from 'react';
import { Navbar, Nav, NavItem, Badge, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const tooltip = (
  <Tooltip id="tooltip">3 New comments on your games</Tooltip>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignUp: false,
      loggedIn: sessionStorage.getItem('id')
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
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Interview Game</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.state.loggedIn &&
          <Nav>
            <NavItem eventKey={1} href="/videos/new">New Game</NavItem>
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <NavItem eventKey={2} href="#">My Games <Badge>3</Badge></NavItem>
            </OverlayTrigger>
          </Nav>}
          <Nav pullRight>
            {!this.state.loggedIn && <NavItem eventKey={1} onClick={this.openLogIn}>Log In</NavItem>}
            {!this.state.loggedIn && <NavItem eventKey={1} onClick={this.openSignUp}>Sign Up</NavItem>}
            {this.state.loggedIn && <NavItem eventKey={1} onClick={this.signOut}>Signout</NavItem>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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

export default NavBar;
