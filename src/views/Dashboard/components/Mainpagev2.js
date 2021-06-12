import React, { useState, useCallback } from 'react'
import Chat from "../../../images/Chat.png";
import Show from "../../../images/Show.png";
import Cross from "../../../images/Cross.png";
import Plutopiaicon1 from "../../../images/Plutopia-Icon-1.png";
import Ptopiabox from "./Ptopiabox.js";
import group40 from "../../../images/Group40.png";
import group52 from "../../../images/Group52.png";
import Vaultdetails from "./Vaultdetails.js";
import Yourswamp from "./Yourswamp.js";
import $ from "jquery";
import Ptopiabx from "./json/ptopiabx";

const Mainpagev2 = (props) => {
	const [certikinfo, setCertikinfo] = useState(true)
  // const pbarray = [
  //    {
  //     bckcolor: "rgba(117, 240, 157, 1)",
  //     img: group40,
  //     name: "pTopia",
  //     factor: "50",
  // 	balance: "0",
  // 	deposited:"0",
  // 	yearly: "333.11",
  // 	daily: "0.91",
  // 	tvl: "10.63",
  // 	btnid:"get-topia-btn",
  // 	btnname:'Get Topia'
  //    },
  //    {
  //     bckcolor: "rgba(47, 255, 255, 1)",
  //     img: group52,
  //     name: "SWAMP / PNB LP",
  //     factor: "50",
  // 	balance: "99999",
  // 	deposited:"99999",
  // 	yearly: "333.11",
  // 	daily: "0.91",
  // 	tvl: "10.63",
  // 	btnid:"get-topia-btn",
  // 	btnname:'Harvest'
  //    },
  //    {
  //     bckcolor: "rgba(244, 123, 255, 1)",
  //     img: group52,
  //     name: "Topia",
  //     factor: "50",
  // 	balance: "0",
  // 	deposited:"0",
  // 	yearly: "333.11",
  // 	daily: "0.91",
  // 	tvl: "10.63",
  // 	btnid:"get-topia-btn",
  // 	btnname:"Harvest"
  //    },
  //    {
  //     bckcolor: "rgba(244, 123, 255, 0)",
  //     img: group52,
  //     name: "Topia",
  //     factor: "50",
  // 	balance: "0",
  // 	deposited:"0",
  // 	yearly: "333.11",
  // 	daily: "0.91",
  // 	tvl: "10.63",
  // 	btnid:"get-topia-btn",
  // 	btnname:"Harvest"
  //    },
  //  ]
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
       
        <div className="audit" style={{display:certikinfo== true ? "flex":"none"}}>
          <div className="chat-icon-box">
            <img className="chat-icon" src={Chat}></img>
          </div>
          <div className="audit-text">
            Certik audit is in progress. Please check Certik website for updates
            here. Meanwhile you can read Techrate.org audit which is already
            complete here.
          </div>
          <div className="cross-icon" onClick={() => setCertikinfo(false)}>
            <img src={Cross} ></img>
          </div>
        </div>
        <div id="deposit-info-box">
          <div className="deposit-box">
            <div className="deposit-head">
              My Total Deposit
              <span id="show-icon">
                <img src={Show}></img>
              </span>
            </div>
            <div className="deposit">
              $<span className="deposit-amount">{props.deposit}</span>
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
		{
          Ptopiabx.map((item =>
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
          ))
        }
      </div>
      <Vaultdetails />
    </>
  );
};

export default Mainpagev2;
