import React from 'react';

const Vbox = (props) => {
  return (
  	<span id={props.id} style={{width: props.width, opacity: props.opacity}}>
		<div id="vbox1-h">{props.version} <span id="vbox-date">{props.date}</span></div>
		<div id="vbox1-b"></div>
	</span>
  	);
}

export default Vbox;

	