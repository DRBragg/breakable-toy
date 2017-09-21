import React from 'react';
import { Panel } from 'react-bootstrap';

const CardView = (props) => {
  return (
    <Panel header={props.card.catagory} bsStyle="info">
      {props.card.body}
    </Panel>
  )
}

export default CardView;
