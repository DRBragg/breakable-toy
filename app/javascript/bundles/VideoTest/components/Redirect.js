import React from 'react';
import { Alert } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

//adjust this before deploying
const actions = [
  <RaisedButton
    label="Ok"
    primary={true}
    onClick={()=> window.location.replace(window.location.origin)}
  />
];

const Redirect = (props) => {
  return (
    <div>
      <Alert bsStyle="danger">
        You are not logged in
      </Alert>
      <Dialog
        actions={actions}
        modal={false}
        open={true}
      >
        You must be logged in to make a new game
      </Dialog>
    </div>
  )
}

export default Redirect;
