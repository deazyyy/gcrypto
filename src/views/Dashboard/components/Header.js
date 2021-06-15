import React, { useState, useRef, createRef, useEffect } from "react";
import Buttons from "../../../components/Buttons";
import Ellipse5 from "../../../images/Ellipse5.svg";
import $ from "jquery";
import Accountdetails from "../../Modals/Account";
import Vaultdetails from "../../Modals/Vaultdetails";
import Yourswamp from "../../Modals/Yourswamp";

const Header = (props) => {
  const AccountModal = useRef(null);
  const VaultModal = useRef(null);
  const SwampModal = useRef(null);
  return (
    <div id="container">
      <Accountdetails ref={AccountModal} />
      <Vaultdetails ref={VaultModal} />
      <Yourswamp ref={SwampModal} />
      <div id="nav">
        <ul id="navlist">
          <li>Earn</li>
          <li>Tutorials</li>
          <li>Docs</li>
          <li>Buy BNB</li>
          <li>Download Wallet</li>
        </ul>
      </div>
      <div id="nav-right">
        <Buttons id="navbtn" name="Buy Tron" width="140px" height="46px" />
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
