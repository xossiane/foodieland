import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Backdrop = () => {
  return <div className="backdrop__blog"></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="modal__blog">
      <div className="modal__blog--content">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
