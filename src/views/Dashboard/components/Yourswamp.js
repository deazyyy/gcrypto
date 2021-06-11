import React from 'react';
import $ from 'jquery';
import group40 from '../../../images/Group40.png';
import paper from '../../../images/PaperPlus.png';
import Buttons from '../../../components/Buttons';

const Yourswamp = () => {

  return (
    <div className="pop-up3" id="yourswamp">
      <div className="pop-up-overlay3"></div>
      <div className="pop-up-vault3">
        <div className="pop-vault-head">
          <div className="pop-h1" id="v-h1">Your Swamp</div>
          <div className="pop-h1" id="cross" onClick={hidevault}>x</div>
        </div>
    
        <div className="pbody5">
          <div><img id="group40-2" src={group40}></img></div>
          <div className="pop-t2" id="value-swamp">0.000</div>
        </div>

        <div className="pbody4">
          <div className="pop-line"><span className="pop-h1">Balance</span><span className="pop-t">0.00 swamp</span></div>
          <div className="pop-line"><span className="pop-h1">Balance in Vault</span><span className="pop-t">0.00 swamp</span></div>
        </div>

        <div className="pbody6">
          <div className="pop-line"><span className="pop-h1">Price</span><span className="pop-t">$22.17</span></div>
          <div className="pop-line"><span className="pop-h1">Balance in Vault</span><span className="pop-t">392.098</span></div>
          <div className="pop-line"><span className="pop-h1">Market Cap</span><span className="pop-t">$2.3.922.098</span></div>
          <div className="pop-line">
            <span className="pop-h1">Contact Address</span>
            <span className="pop-t">23jkn123nkjn135knj1<img id="paper2" src={paper}></img></span>
          </div>
        </div>

        <div className="pop-h1" id="viewchart">View Chart</div>
        <Buttons name="Buy Swamp" width="80%" id="buyswamp" />
      </div>
    </div>
  );
}

function hidevault(){
  $('#yourswamp').css({'display':"none"});
}

export default Yourswamp;