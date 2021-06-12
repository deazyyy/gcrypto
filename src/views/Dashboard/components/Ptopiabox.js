import React, { useState, useCallback } from 'react'
import Buttons from '../../../components/Buttons';
import pending from '../../../images/pending.png';
import $ from 'jquery';

const Ptopiabox = (props) => {
	const [expanded, setExpanded] = useState(false);
	const [max2, setMax2] = useState(0);
	const max2val = 200
	return(
	<div className="ptopiaboxouter">
		<div className="ptopiabox" >
			<div class="ptopia-box-overlay"></div>
			<div className="ptopiabox-initial" onClick={() => setExpanded(!expanded)}>
				<div className="colored-rect"  style={{background: props.bckcolor}}></div>
					<img className={props.imgclass} src={props.img}></img>
					<div className="ptopiabox-name2">
						<div>{props.name}</div>
						<div className="ptopiabox-name-box">
							<span id="ptopiabox-factor">{props.factor}x</span>
							<span id="ptopiabox-text2">pTopia</span>
						</div>
					</div>
					<div className="data">
						<div className="ptopiabox-name">{props.balance}
							<div className="ptopiabox-text">Balance</div>
						</div>
						<div className="ptopiabox-name">{props.deposited}
							<div className="ptopiabox-text">Deposited</div>
						</div>
						<div className="ptopiabox-name">{props.yearly}%
							<div className="ptopiabox-text">Yearly</div>
						</div>
						<div className="ptopiabox-name">{props.daily}%
							<div className="ptopiabox-text">Daily</div>
						</div>
						<div className="ptopiabox-name">${props.tvl}
							<div className="ptopiabox-text">TVL</div>
						</div>
					</div>
				<div id={props.btnid}><Buttons width="131px" height="41px" name={props.btnname} id='get-topia-btn'/></div>
			</div>
			<div className="ptopia-show" id={props.ids} style={{height:expanded== false?0:"auto"}}>
				<div id="ptopia-flex">
					<div className="wallet ptopia-box">
						<div className="wallet-line1">
							<span className="ptopiabox-text">Wallet</span>
							<span className="wallet-amount">
								<span className="ptopiabox-name" id="pnvalue">0.000000</span>
								<span className='pending-dollars'>$13.69</span>
							</span>
						</div>
						<div className="get-ptopia">Get Ptopia</div> 
						<div className="wallet-value">
							<input  type="number" placeholder="0.00" max={max2val}  value={max2== 1 ? max2val :null} min={0}/>
							<span className="wallet-max-btn" onClick={()=>setMax2(1)}>Max</span>
						</div>
						<Buttons width="100%" height="41px" name="Deposit to Vault"/>
					</div>
					<div className="wallet ptopia-box">
						<div className="wallet-line1">
							<span className="ptopiabox-text">Vault</span>
							<span className="wallet-amount">
								<span className="ptopiabox-name" id="pnvalue">0.000000</span>
								<span className='pending-dollars'>$13.69</span>
							</span>
						</div>
						<div className="get-ptopia" id="vault-get-ptopia">Get Ptopia</div> 
						<div className="wallet-value">
							<input  type="number" placeholder="0.00" max={max2val}  value={max2== 1 ? max2val :null} min={0}/>
							<span className="wallet-max-btn" onClick={()=>setMax2(1)}>Max</span>
						</div>
						<Buttons width="100%" height="41px" name="Deposit to Vault" />
					</div>
					<div className="pending ptopia-box">
						<div>Pending</div>
						<div><img src={pending}></img></div>
						<div>
							<span className="pending-amount">
								<span className="ptopiabox-name" >0.000000</span>
								<span className='pending-dollars'>$13.69</span>
							</span>
						</div>
						<Buttons width="100%" height="41px" name="Deposit to Vault" />
					</div>
				</div>
				<div className="blackbox">
					{/* <div id="bb-overlay"></div> */}
					<div className="blackbox-annual">
						<div className="bb-h1">Annual</div>
						<div className="bb-t">Swamp APR: <span className="bb-n">294.62%</span></div>
						<div className="bb-t">Total Returns: <span className="bb-n">294.62%</span></div>
					</div>
					<div className="blackbox-annual" id="bb-daily">
						<div className="bb-h1">Daily</div>
						<div className="bb-t">Swamp Daily: <span className="bb-n">294.62%</span></div>
						<div className="bb-t">Total Daily: <span className="bb-n">294.62%</span></div>
					</div>
					<div className="blackbox-annual" id="bb-farm">
						<div className="bb-h1">Farm</div>
						<div className="bb-t">Weight: 5x</div>
						<div className="bb-t">Swamp TVL: $600,190</div>
					</div>
					<div className="bb-right-links">
						<div className="bb-h1">Learn how to buy and add to staking <a className="bb-links" href="#">Tutorials</a></div>
						<div className="bb-h1">Check Fees & Takenomics <a className="bb-links" href="#">Read docs</a></div>
						<div className="bb-h1"><a className="bb-links" href="#" onClick={displayvault}>Vault Details</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}

// function expand(e){
//   var state = $(e.currentTarget).attr('expanded');
//   if(state == 'true'){
//     $(e.currentTarget).find('.ptopia-show').css({
//     	'opacity':'0',
//     	'max-height': '0px'
//     });
//     //$(e.currentTarget).find('.ptopia-box-overlay').css({'height':'110px'});
//     $(e.currentTarget).find('.data').css({'opacity':'1'});
//     $(e.currentTarget).attr('expanded','false');
//   }else {
//     $(e.currentTarget).find('.ptopia-show').css({
//     	'opacity':'1',
//     	'max-height': '1200px'
// 	});
// 	setTimeout(function(){
// 		$(e.currentTarget).find('.ptopia-show').css({
// 	    	"animation": "fade 0.5s ease-in-out forwards"
// 		});
// 	},500)
//     //$(e.currentTarget).find('.ptopia-box-overlay').css({'height':'100%'});
//     $(e.currentTarget).find('.data').css({'opacity':'1'});
//     $(e.currentTarget).attr('expanded','true');
//   }
// }


function displayvault(){
	$('#vaultdetails').css({'display':"block"});
}

export default Ptopiabox;