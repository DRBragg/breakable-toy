import React from 'react';
import { Navbar, Nav, NavItem, Badge, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';

const tooltip = (
  <Tooltip id="tooltip">3 New comments on your games</Tooltip>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return(
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Interview Game</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">New Game</NavItem>
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <NavItem eventKey={2} href="#">My Games <Badge>3</Badge></NavItem>
            </OverlayTrigger>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={this.open}>LogIn</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm close={this.close}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default NavBar;
