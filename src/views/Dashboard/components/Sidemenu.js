import React from 'react';
import arrowdown from "../../../images/arrowdown.png";
import Search from "../../../images/Search.png";
import p_icon from '../../../images/Plutopia-Icon-1.png';
import $ from 'jquery';

const Sidemenu = () => {
    
  const dropdownarray = [
    {
      id: "platform",
      head: "Platform",
      default: "All"
    }
    ,{
      id: "type",
      head: "Type",
      default: "All"
    }
    ,{
      id: "asset",
      head: "Asset",
      default: "All"
    }
    ,{
      id: "sort-by",
      head: "Sort By",
      default: "Default"
    }
  ]

  const dd = dropdownarray.map( (dropdown,i) => {
  return <Dropdown id={dropdownarray[i].id} head={dropdownarray[i].head} default={dropdownarray[i].default} />
  })

  return (
  		<div id="cont">
      <div id="black-tint"></div>
        <div id="crossbtn" onClick={hidesidemenu}>x</div>
  			<div id="logo-side">Logo</div>
  			<div id="inputs">
          <div id="toggle-side">
            <span className="side-btn" id="active-btn">Active</span>
            <span className="side-btn" id="retired-btn">Retired</span>
          </div>
           <form className="forms">
            <p className="input-heads">Search</p>
            <input id="searchbar"
              type="text" placeholder="Seach pools"/>
            <img src={Search} id="search-icon"></img>
          </form>
          {dd}
          <div id="show-vault-tick">
            <div id="tick-box"></div><div id="sv-text">Show my Vault</div>
          </div>
          <div id="side-menu-bottom"><span><img id="p_icon" src={p_icon}></img></span><span id="svtt">$135,196,015</span></div>
        </div>
  		</div>
  	);
}

const Dropdown = (props) => {
  return(
    <div className="dd-box">
      <p className="input-heads" id={props.id}>{props.head}</p>
      <select className="dropdown-menu">
        <option selected value={props.default}>{props.default}</option>
        <option value={props.option1}>{props.option1}</option>
        <option value={props.option2}>{props.option2}</option>
        <option value={props.option3}>{props.option3}</option>
      </select>
      <img src={arrowdown} id="arrow-icon"></img>
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