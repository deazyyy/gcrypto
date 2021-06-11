import React from 'react';
import './style.scss';
import Centertext from './components/Centertext';
import Versionbox from './components/Versionbox';
import Logo from './components/Logo';
const Landing = () => {
  return (
  	    <>
            <Logo />
            <Centertext />
            <Versionbox />
        </>
  	 );
}

export default Landing;