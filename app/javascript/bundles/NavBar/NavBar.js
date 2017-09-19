import React from 'react';
import { Navbar, Nav, NavItem, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';

const tooltip = (
  <Tooltip id="tooltip">3 New comments on your games</Tooltip>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
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
            <NavItem eventKey={1} href="#">My Account</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
