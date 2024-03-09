import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full
   bg-gray-950 opacity-50 z-50"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="w-[650px] fixed top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg z-50 overflow-y-auto">
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
