import React, { useState, useCallback } from "react";
import Chat from "../../../images/Chat.png";
import Show from "../../../images/Show.png";
import Cross from "../../../images/Cross.png";
import Plutopiaicon1 from "../../../images/Plutopia-Icon-1.png";
import Ptopiabox from "./Ptopiabox.js";
import Ptopiabx from "./json/ptopiabx";

const Mainpagev2 = (props) => {
  const [certikinfo, setCertikinfo] = useState(true);
  const [showdeposit, setShowdeposit] = useState(true);
  return (
    <>
      <div id="mainpage">
        <div className="header">
          <div className="head-main">
            Deposit & <span className="head-bold">Earn Money</span>
          </div>
          <div className="head-amount">
            TVL <span className="tvl-amount">${props.tvl}</span>
          </div>
        </div>

        <div
          className="audit"
          style={{ display: certikinfo == true ? "flex" : "none" }}
        >
          <div className="chat-icon-box">
            <img className="chat-icon" src={Chat}></img>
          </div>
          <div className="audit-text">
            Certik audit is in progress. Please check Certik website for updates
            here. Meanwhile you can read Techrate.org audit which is already
            complete here.
          </div>
          <div className="cross-icon" onClick={() => setCertikinfo(false)}>
            <img src={Cross}></img>
          </div>
        </div>
        <div id="deposit-info-box">
          <div className="deposit-box">
            <div className="deposit-head">
              My Total Deposit
              <span id="show-icon">
                <img
                  src={Show}
                  onClick={() => setShowdeposit(!showdeposit)}
                ></img>
                <span
                  className="showdep"
                  style={{ display: showdeposit == true ? "block" : "none" }}
                ></span>
              </span>
            </div>
            <div className="deposit">
              $
              <span className="deposit-amount">
                {showdeposit == true ? props.deposit : "-- --"}
              </span>
            </div>
          </div>
          <div className="utopia-pending">
            <div className="deposit-head">Utopia Pending</div>
            <div className="utopia-pending-2">
              <span className="plutopia-icon1">
                <img src={Plutopiaicon1}></img>
              </span>
              <span className="deposit-amount">{props.utopiapending}</span>
              <span className="pending-dollars">
                ${props.utopiapendingdollars}
              </span>
            </div>
            <div>
              <button id="harvest-btn">Harvest</button>
            </div>
          </div>
        </div>
        {Ptopiabx.map((item) => (
          <Ptopiabox
            img={item.img}
            name={item.name}
            factor={item.factor}
            balance={item.balance}
            deposited={item.deposited}
            yearly={item.yearly}
            daily={item.daily}
            tvl={item.tvl}
            bckcolor={item.color}
            btnname="Get Topia"
            imgclass="group40"
          />
        ))}
      </div>
    </>
  );
};

export default Mainpagev2;
