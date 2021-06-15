import React from "react";
import $ from "jquery";
import Modal from "react-modal";
import Ellipse5 from "../../images/Ellipse5.svg";
import dash from "../../images/dash.png";
import arrowdown from "../../images/arrowdown.png";
import Buttons from "../../components/Buttons";
import cross from "../../images/Cross.png";
import group40 from "../../images/Group40.png";
import paper from "../../images/PaperPlus.png";

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
const Yourswamp = forwardRef((props, ref) => {
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
        <div className="pop-up-vault3">
          <div className="pop-vault-head">
            <div className="pop-h1" id="v-h1">
              Your Swamp
            </div>
            <div className="pop-h1" id="cross" onClick={closeModal}>
              <img src={cross} alt="cross" />
            </div>
          </div>

          <div className="pbody5">
            <div>
              <img id="group40-2" src={group40}></img>
            </div>
            <div className="pop-t2" id="value-swamp">
              0.000
            </div>
          </div>

          <div className="pbody4">
            <div className="pop-line">
              <span className="pop-h1">Balance</span>
              <span className="pop-t">0.00 swamp</span>
            </div>
            <div className="pop-line">
              <span className="pop-h1">Balance in Vault</span>
              <span className="pop-t">0.00 swamp</span>
            </div>
          </div>

          <div className="pbody6">
            <div className="pop-line">
              <span className="pop-h1">Price</span>
              <span className="pop-t">$22.17</span>
            </div>
            <div className="pop-line">
              <span className="pop-h1">Balance in Vault</span>
              <span className="pop-t">392.098</span>
            </div>
            <div className="pop-line">
              <span className="pop-h1">Market Cap</span>
              <span className="pop-t">$2.3.922.098</span>
            </div>
            <div className="pop-line">
              <span className="pop-h1">Contact Address</span>
              <span className="pop-t">
                23jkn123nkjn135knj1<img id="paper2" src={paper}></img>
              </span>
            </div>
          </div>

          <div className="pop-h1">View Chart</div>
          <Buttons name="Buy Swamp" />
        </div>
      </div>
    </Modal>
  );
});

export default Yourswamp;
