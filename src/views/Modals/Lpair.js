import React from "react";
import $ from "jquery";
import Modal from "react-modal";
import Ellipse5 from "../../images/Ellipse5.svg";
import dash from "../../images/dash.png";
import paper from "../../images/PaperPlus.png";
import arrowdown from "../../images/arrowdown.png";
import Buttons from "../../components/Buttons";
import cross from "../../images/Cross.png";
import dash2 from '../../images/Group88.png';
import doubledown from '../../images/Group90.png';
import arrowdown_p from "../../images/arrowdown-p.png";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    maxWidth: "400px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const { forwardRef, useRef, useImperativeHandle } = React;
const Lpair = forwardRef((props, ref) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => {
      setIsOpen(true);
    },
  }));
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="modalouter accountmodal lpmodal">
      <div className="pop-up-vault2">
        <div className="pop-lp-head">
          <div className="popl-h1" id="l-h1">Create <span id='boldlp'>LP</span></div>
          <div className="pop-h1-2">One click LP creater</div>
          <div className="pop-h1" id="lcross"><img src={cross} alt="cross" /></div>
        </div>
       
        <div className="lbody2">
          <div className="l-dropdown">
            <img className="l-dash" src={dash}></img>
            <span className="l-bnb">BNB</span>
            <img src={arrowdown_p} id="arrow-icon3"></img>
          </div>
          <div id="zero-max">
            <span id="zeronum">0</span>
            <span id="max">Max</span>
          </div>
          <div id="balance-1">Balance :<span id="balnum"> 0.0345678</span></div>
          <div id="doubledown">
            <img src={doubledown} id="doubledown-img"></img>
          </div>
          <div className="l-dropdown" id="l-drpdwn2">
            <img className="l-dash-2" src={dash2}></img>
            <span className="l-bnb-2">SWAMP BNB-LP</span>
            <img src={arrowdown_p} id="arrow-icon3"></img>
          </div>
          <div id="balance-1">Balance :<span id="balnum"> 0.033</span></div>
        </div>

        <div className="lbody3">
          <div id="btmbrdr"><div className="btm-txt-h" id="vault-txt-h">Vault:<span className="btm-txt-p">0.000000</span></div></div>
          <div className="btm-txt-h">Slippage tolerance<span className="btm-txt-p">5.00%</span></div>
          <div className="btm-txt-h">Min. recieved<span className="btm-txt-p">0.000000 LP</span></div>
          <Buttons name="Create LP" />
        </div>
      </div>
      </div>
    </Modal>
  );
});

export default Lpair;
