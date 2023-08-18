import { Fragment, useContext } from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";
import { ToggleButtonContext } from "../../App";

const Backdrop = (props) => {
  const { setShowModal } = useContext(ToggleButtonContext);
  return (
    <div className={styles.backdrop} onClick={() => setShowModal(false)} />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
