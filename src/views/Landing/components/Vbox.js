import React from 'react';

const Vbox = (props) => {
  return (
  	<div className="vbox" id={props.id} style={{width: props.width, opacity: props.opacity}}>
		<div className="header">Version {props.version} <span className="date">{props.date}</span></div>
		<div className="content">
			<div><span>#Added</span>{props.added}</div>
			<div><span>#Changed</span>{props.changed}</div>
			<div><span>#Fixed</span>{props.fixed}</div>
		</div>

	</div>
  	);
}

export default Vbox;

	