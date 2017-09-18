import React from 'react';

const Webcam = (props) => {
  return (
    <video autoPlay muted src={props.src} />
  )
}

export default Webcam;
