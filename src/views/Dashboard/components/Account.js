import React from 'react';
import $ from 'jquery';
import Ellipse5 from '../../../images/Ellipse5.svg';
import dash from '../../../images/dash.png';
import paper from '../../../images/PaperPlus.png';
import arrowdown from "../../../images/arrowdown.png";
import Buttons from 'components/Buttons';

const Accountdetails = () => {

  return (
    <div className="pop-up2" id="accountdetails">
      <div className="pop-up-overlay2"></div>
      <div className="pop-up-vault2">
        <div className="pop-vault-head">
          <div className="pop-h1" id="v-h1">Account</div>
          <div className="pop-h1" id="cross" onClick={hideaccount}>x</div>
        </div>
        <div className="pbody">
          <div><img id="ellipse-img" src={Ellipse5}></img></div>
          <div className="pop-h1" id="youraddress">Your Address</div>
          <div className="pop-t2" id="address">34mknasdd...2f35gh5</div>
          <div id="copyaddress"><img id="paper" src={paper}></img>Copy Address</div>
        </div>
        <div className="pbody2">
          <div className="pop-h1" id="rpc">RPC Provider</div>
          <div id="dropdown">
            <img id="dash" src={dash}></img>
            <span id="bnb">BNB</span>
            <img src={arrowdown} id="arrow-icon2"></img>
          </div>
        </div>
        <Buttons id="disconnect" width="80%" name="Disconnect Wallet"/>
      </div>
    </div>
  );
}

function hideaccount(){
  $('#accountdetails').css({'display':"none"});
}

export default Accountdetails;