import { createContext, useContext, useState } from "react";
import styles from "./Buttons.module.css";
import { Routes, Route, Link } from "react-router-dom";
import LogInModal from "../Modal/LogInModal";
import { ModalCtx } from "../../App";

const LogInBtn = () => {
  const { setShowModal } = useContext(ModalCtx);

  const handleLogInBtn = () => {
    setShowModal(true);
  };
  return (
    <>
      <button className={styles.btn} onClick={handleLogInBtn}>
        Log In
      </button>
    </>
  );
};
export default LogInBtn;
