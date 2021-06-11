import React from 'react';
import './Buttons.css';

const Buttons = (props) => {
  return (
      <div className="launchapp-btn" id={props.id}>
      	<button className="la-btn" style={{width: props.width, height: props.height}}>{props.name}</button>
      	<div className="extraborder" style={{width: props.width, height: props.height}}></div>
      	<div className="extraglow" style={{width: props.width, height: props.height}}></div>
      </div>
  );
}

export default Buttons;