import React from 'react';

const Webcam = (props) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <video autoPlay muted src={props.src} className="embed-responsive-item"/>
    </div>
  )
}

export default Webcam;
