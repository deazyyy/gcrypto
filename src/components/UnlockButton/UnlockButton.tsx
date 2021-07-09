import React, { useState, useRef } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Row from "./Row";
import Buttons from "../Buttons";
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
    maxWidth: "350px",
    minWidth: "200px",
  },
};

interface Props {
  title?: string;
  width?: string;
  className?: string;
}

const UnlockButton: React.FC<Props> = ({ title, width, className }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <a onClick={openModal} className={className}>
        <Buttons onClick={openModal} width={width} height="46px" name={title} />
      </a>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="unlockframe w-100">
          <div className="pop-vault-head" style={{ marginBottom: "30px" }}>
            <div className="pop-h1" id="v-h1">
              Connect to wallet
            </div>
            <div className="pop-h1" id="cross" onClick={closeModal}>
              <img src={cross} alt="cross" />
            </div>
          </div>
          <div>
            <Row name={"Metamask"} imgname={"metamask"} />
            <Row name={"TrustWallet"} imgname={"metamask"} />
            <Row name={"MathWallet"} imgname={"metamask"} />
            <Row name={"TokenPocket"} imgname={"metamask"} />
            <Row name={"Walletconnect"} imgname={"metamask"} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UnlockButton;
