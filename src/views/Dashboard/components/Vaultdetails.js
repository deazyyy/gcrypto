import React from 'react';
import $ from 'jquery';

const Vaultdetails = () => {

  return (
    <div className="pop-up" id="vaultdetails">
      <div className="pop-up-overlay"></div>
      <div className="pop-up-vault">
        <div className="pop-vault-head">
          <div className="pop-h1" id="v-h1">Vault Details</div>
          <div className="pop-h1" id="cross" onClick={hidevault}>x</div>
        </div>
        <div className="pbody">
          <div className="pop-line"><span className="pop-h1">Pool</span><span className="pop-t">Swamp</span></div>
          <div className="pop-line"><span className="pop-h1">Pool ID</span><span className="pop-t">2</span></div>
          <div className="pop-line"><span className="pop-h1">Strategy Contract</span><span className="pop-t">abcdefg</span></div>
        </div>
      </div>
    </div>
  );
}

function hidevault(){
  $('#vaultdetails').css({'display':"none"});
}

export default Vaultdetails;