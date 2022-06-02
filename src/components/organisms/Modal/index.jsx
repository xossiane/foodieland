import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Backdrop = () => {
  return <div className="backdrop__blog"></div>;
};

const ModalOverlay = ({ children, setShowModal }) => {
  const getClickLocation = (e) => {
    if (modalref.current === e.target) {
      setShowModal(false);
    }
  };
  const modalref = useRef();
  return (
    <div
      className="modal__blog"
      ref={modalref}
      onClick={(e) => getClickLocation(e)}
    >
      <div className="modal__blog--content">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, setShowModal }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay setShowModal={setShowModal}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
