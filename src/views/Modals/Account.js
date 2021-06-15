import React from "react";
import $ from "jquery";
import Modal from "react-modal";
import Ellipse5 from "../../images/Ellipse5.svg";
import dash from "../../images/dash.png";
import paper from "../../images/PaperPlus.png";
import arrowdown from "../../images/arrowdown.png";
import Buttons from "../../components/Buttons";
import cross from "../../images/Cross.png";
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
const Accountdetails = forwardRef((props, ref) => {
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
      <div className="modalouter accountmodal">
        <div className="pop-up-vault2">
          <div className="pop-vault-head">
            <div className="pop-h1" id="v-h1">
              Account
            </div>
            <div className="pop-h1" id="cross" onClick={closeModal}>
              <img src={cross} alt="cross" />
            </div>
          </div>
          <div className="pbody">
            <div>
              <img id="ellipse-img" src={Ellipse5}></img>
            </div>
            <div className="pop-h1">Your Address</div>
            <div className="pop-t2">34mknasdd...2f35gh5</div>
            <div id="copyaddress">
              <img id="paper" src={paper}></img>Copy Address
            </div>
          </div>
          <div className="pbody2">
            <div className="pop-h1">RPC Provider</div>
            <div id="dropdown">
              <img id="dash" src={dash}></img>
              <span id="bnb">BNB</span>
              <img src={arrowdown} id="arrow-icon2"></img>
            </div>
          </div>
          <Buttons name="Disconnect Wallet" />
        </div>
      </div>
    </Modal>
  );
});

export default Accountdetails;
