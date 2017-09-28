import React from 'react';
import { Navbar, Nav, NavItem, Badge, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import AvAddToQueue from 'material-ui/svg-icons/av/add-to-queue';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';
import ActionHome from 'material-ui/svg-icons/action/home';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const tooltip = (
  <Tooltip id="tooltip">3 New comments on your games</Tooltip>
);

const MenuButtons = (props) => {

}

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignUp: false,
      loggedIn: sessionStorage.getItem('id'),
      isAdmin: false,
      open: false
    }

    this.close = this.close.bind(this)
    this.openSignUp = this.openSignUp.bind(this)
    this.openLogIn = this.openLogIn.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  handleLogin(admin) {
    if (admin) {
      sessionStorage.setItem('admin', true);
    }
    this.setState({ loggedIn: true, isAdmin: admin });
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
      sessionStorage.clear();
      this.setState({loggedIn: false, isAdmin: false});
    })
  }

  close() {
    this.setState({ showLogin: false, showSignUp: false });
  }

  openSignUp() {
    this.setState({ showSignUp: true, showLogin: false });
  }

  openLogIn() {
    this.setState({ showLogin: true, showSignUp: false });
  }

  render() {
    console.log('current state', this.state);
    return(
      <div>
      <AppBar
        title="Interview Game"
        iconElementRight= { this.state.loggedIn ? <FlatButton onClick={this.signOut} label="Sign Out" /> : <FlatButton onClick={this.openLogIn} label="Log In/Sign Up" /> }
        onLeftIconButtonTouchTap={() => this.setState({open: true})}
        showMenuIconButton = { this.state.loggedIn ? true : false }
      />
      <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={() => this.setState({open: false})}
        >
        <AppBar
          title="Menu"
          onLeftIconButtonTouchTap={() => this.setState({open: false})}
        />
        <List>
          <ListItem primaryText="Home" leftIcon={<ActionHome />} href="/"/>
          <ListItem primaryText="New Game" leftIcon={<AvAddToQueue />} href={"/users/"+sessionStorage.getItem('id')+"/videos/new"} />
          <ListItem primaryText="My Games" leftIcon={<DeviceDvr />} href={"/users/"+sessionStorage.getItem('id')}/>
          <ListItem primaryText="My Account" leftIcon={<ActionAccountCircle />} />
        </List>
        <Divider />
        {this.state.isAdmin && <List>
          <Subheader>Admin Options</Subheader>
          <ListItem primaryText="All Games" href={"/users/"+sessionStorage.getItem('id')}/>
        </List>}
        </Drawer>
        <Modal show={this.state.showLogin} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm login={this.handleLogin} close={this.close}/>
          </Modal.Body>
          <Modal.Footer>
            No Account? <FlatButton onClick={this.openSignUp} label="Sign Up" />
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showSignUp} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignUpForm login={this.handleLogin} close={this.close}/>
          </Modal.Body>
          <Modal.Footer>
            Already have an Account? <FlatButton onClick={this.openLogIn} label="Log In" />
          </Modal.Footer>
        </Modal>
        </div>
    )
  }
}


export default Appbar;
