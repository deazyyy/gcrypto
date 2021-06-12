import React, { useState, useCallback } from 'react'
import arrowdown from "../../../images/arrowdown.png";
import Search from "../../../images/Search.png";
import p_icon from '../../../images/Plutopia-Icon-1.png';
import $ from 'jquery';
import Dropdownarr from "./json/dropdown";

const Sidemenu = () => {
  const [istabactive, setIstabactive] = useState(true)
  const Dropdown = Dropdownarr.map( (item,i) => {
  return (
      <div className="dd-box">
        <p className="input-heads">{item.head}</p>
        <select className="dropdown-menu">
          <option selected value={item.default}>{item.default}</option>
          {item.options.map( (items,i) => {return (<option value={items}>{items}</option>)})}
        </select>
        <img src={arrowdown} id="arrow-icon"></img>
      </div>
    )
  })

  return (
  		<div id="cont">
      <div id="black-tint"></div>
        <div id="crossbtn" onClick={hidesidemenu}>x</div>
  			<div id="logo-side">Logo</div>
  			<div id="inputs">
          <div id="toggle-side">
            <div className={istabactive == true ?"side-btn active-btn":"side-btn"} onClick={()=> setIstabactive(true)}>Active</div>
            <div className={istabactive == false ?"side-btn active-btn":"side-btn"} onClick={()=> setIstabactive(false)}>Retired</div>
          </div>
          {/* active tab */}
          <div style={{display: istabactive == true ?"block":"none"}}>
            <form className="forms">
              <p className="input-heads">Search</p>
              <input id="searchbar"
                type="text" placeholder="Seach pools"/>
              <img src={Search} id="search-icon"></img>
            </form>
            {Dropdown}
            <div id="show-vault-tick">
              <div id="tick-box"></div><div id="sv-text">Show my Vault</div>
            </div>
          </div>

           {/* retired tab */}
          <div style={{display: istabactive == false ?"block":"none"}}> 
            <form className="forms">
              <p className="input-heads">Search Retired</p>
              <input id="searchbar"
                type="text" placeholder="Seach pools"/>
              <img src={Search} id="search-icon"></img>
            </form>
          </div>
          <div id="side-menu-bottom"><span><img id="p_icon" src={p_icon}></img></span><span id="svtt">$135,196,015</span></div>
        </div>
  		</div>
  	);
}

function hidesidemenu(){
  $('#cont').css({"left": "-270px"});
}

function contheight(){
  if($(window).height() < 750){
    $('#cont').css({"position": "absolute"});
  }
}

export default Sidemenu;