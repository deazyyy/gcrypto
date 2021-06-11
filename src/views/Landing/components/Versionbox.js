import React from 'react';
import Vbox from './Vbox.js';
import Vector from '../../../images/Vector.png';
import Vectorp from '../../../images/Vectorp.png';

const Versionbox = () => {
  return (
  	<div id="versionbox">
  	<div id="vh-parent">
	  	<div id="vh">Hugo Changelog</div>
	  	<div id="left-right"><button className="lf" id="lf-l"><img src={Vectorp}></img></button><button id="lf-r" className="lf"><img src={Vector}></img></button></div>
	  </div>
	  	<Vbox id="vbox1" width="440px" date="2021.01.13" opacity="1" version="Version 15"/>
	  	<Vbox id="vbox2" width="220px" date=" " opacity="0.4" version="Version 14" />
  	</div>
  	 );
}

export default Versionbox;