import React from 'react';
import Chat from '../../../images/Chat.png';
import Show from '../../../images/Show.png';
import Cross from '../../../images/Cross.png';
import Plutopiaicon1 from '../../../images/Plutopia-Icon-1.png';
import Ptopiabox from './Ptopiabox.js';
import group40 from '../../../images/Group40.png';
import group52 from '../../../images/Group52.png';
import Vaultdetails from './Vaultdetails.js';
import Yourswamp from './Yourswamp.js';
import $ from 'jquery';

const Mainpagev2 = (props) => {

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
	return(
		<>
		<div id="mainpage">
			<div className="head-main">Deposit & <span className="head-bold">Earn Money</span></div>
			<div className="head-amount">TVL <span className="tvl-amount">${props.tvl}</span></div>
			<div className="audit">
				<div className="chat-icon-box"><img className="chat-icon" src={Chat}></img></div>
				<div className="audit-text">
					Certik audit is in progress. Please check Certik website for updates here. 
					Meanwhile you can read Techrate.org audit which is already complete here.
				</div>
				<div id="cross-icon"><img src={Cross}></img></div>
			</div>
			<div id="deposit-info-box">
				<div className="deposit-box">
					<div className="deposit-head">My Total Deposit
						<span id="show-icon"><img src={Show}></img></span>
					</div>
					<div className="deposit">$<span className="deposit-amount">{props.deposit}</span></div>
				</div>
				<div className="utopia-pending">
					<div className="deposit-head">Utopia Pending</div>
					<div className="utopia-pending-2">
						<span className="plutopia-icon1"><img src={Plutopiaicon1}></img></span>
						<span className='deposit-amount'>{props.utopiapending}</span>
						<span className='pending-dollars'>${props.utopiapendingdollars}</span>
					</div>
					<div><button id="harvest-btn">Harvest</button></div>
				</div>
			</div>
			<Ptopiabox idbox='ptopiabox1' bckcolor="rgba(117, 240, 157, 1)" 
					img={group40} name="pTopia" factor="50" balance="0"
					deposited="0" yearly="333.11" daily="0.91"
					tvl="10.63" btnid='get-topia-btn1' idi='ptopiabox-initial1' ids='ptopia-show1'
  					btnname='Get Topia' imgclass="group40"/>
  			<Ptopiabox idbox='ptopiabox2' bckcolor="rgba(47, 255, 255, 1)" 
					img={group52} name="pTopia" factor="50" balance="0"
					deposited="0" yearly="333.11" daily="0.91"
					tvl="10.63" btnid='get-topia-btn2' idi='ptopiabox-initial2' ids='ptopia-show2'
  					btnname='Get Topia' imgclass="group52"/>
  			<Ptopiabox idbox='ptopiabox3' bckcolor="rgba(244, 123, 255, 1)" 
					img={group52} name="pTopia" factor="50" balance="0"
					deposited="0" yearly="333.11" daily="0.91"
					tvl="10.63" btnid='get-topia-btn3' idi='ptopiabox-initial3' ids='ptopia-show3'
  					btnname='Get Topia' imgclass="group52"/>
  			<Ptopiabox idbox='ptopiabox4' bckcolor="rgba(244, 123, 255, 0)" 
					img={group52} name="pTopia" factor="50" balance="0"
					deposited="0" yearly="333.11" daily="0.91"
					tvl="10.63" btnid='get-topia-btn4' idi='ptopiabox-initial4' ids='ptopia-show4'
  					btnname='Get Topia' imgclass="group52"/>
  					
		</div>
		<Vaultdetails />
	</>	
	);
}

export default Mainpagev2;