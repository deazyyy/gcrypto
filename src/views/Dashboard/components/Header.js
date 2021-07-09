import React, { useState, useRef, createRef, useEffect } from "react";
import Buttons from "../../../components/Buttons";
import Ellipse5 from "../../../images/Ellipse5.svg";
import $ from "jquery";
import Accountdetails from "../../Modals/Account";
import Vaultdetails from "../../Modals/Vaultdetails";
import Yourswamp from "../../Modals/Yourswamp";
import Lpair from "../../Modals/Lpair";
import UnlockButton from '../../../components/UnlockButton/UnlockButton'
 
const Header = (props) => {
  const AccountModal = useRef(null);
  const VaultModal = useRef(null);
  const SwampModal = useRef(null);
  const LpModal = useRef(null);
  function accountmodal(){
    // @ts-ignore
    AccountModal.current.openModal();
  }

  function vaultModal() {
      // @ts-ignore
      VaultModal.current.openModal();
  }

  function swampModal() {
      // @ts-ignore
      SwampModal.current.openModal();
  }
  function lpModal() {
    // @ts-ignore
    LpModal.current.openModal();
}  

  return (
    <div id="container">
      <Accountdetails ref={AccountModal} />
      <Vaultdetails ref={VaultModal} />
      <Yourswamp ref={SwampModal} />
      <Lpair ref={LpModal}/>
      <div id="nav">
        <ul id="navlist">
          <li onClick={accountmodal}>Earn</li>
          <li onClick={vaultModal}>Tutorials</li>
          <li onClick={swampModal}>Docs</li>
          <li onClick={lpModal}>Buy BNB</li>
          <li>Download Wallet</li>
        </ul>
      </div>
      <div id="nav-right">
      <UnlockButton className="navbtn" title="Buy Tron" width="140px" height="46px" />
        {/* <Buttons id="navbtn" name="Buy Tron" width="140px" height="46px" /> */}
        <div id="navtxt">
          pTopia <span id="dollar">${props.dollar}</span>
        </div>
        <div id="nav-img" onClick={showaccount}>
          <img src={Ellipse5}></img>
        </div>
      </div>
    </div>
  );
};

function showaccount() {
  $("#accountdetails").css({ display: "block" });
}

export default Header;
