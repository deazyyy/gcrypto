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
const Vaultdetails = forwardRef((props, ref) => {
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
        <div className="pop-up-vault">
          <div className="pop-vault-head">
            <div className="pop-h1" id="v-h1">
              Vault Details
            </div>
            <div className="pop-h1" id="cross" onClick={closeModal}>
              <img src={cross} alt="cross" />
            </div>
          </div>
          <div className="pbody">
            <div className="pop-line">
              <span className="pop-h1">Pool</span>
              <span className="pop-t">Swamp</span>
            </div>
            <div className="pop-line">
              <span className="pop-h1">Pool ID</span>
              <span className="pop-t">2</span>
            </div>
            <div className="pop-line">
              <span className="pop-h1">Strategy Contract</span>
              <span className="pop-t">abcdefg</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default Vaultdetails;
