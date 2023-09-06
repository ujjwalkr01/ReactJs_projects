import { createContext, useState } from "react";
import styles from "./Buttons.module.css";
import { Routes, Route, Link } from "react-router-dom";
import LogInModal from "../../Modal/LogInModal";
import AuthApi from "../../../api/AuthApi";

export const ModalCtx = createContext(null);
const LogInBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogInBtn = () => {
    setShowModal(true);
    let res=AuthApi();
    console.log(res);
  };
  return (
    <ModalCtx.Provider value={{setShowModal}}>
      <button className={styles.btn} onClick={handleLogInBtn}>
        Log In
      </button>
      {showModal && (
        <Routes>
          <Route path="/" element={<LogInModal />} />
        </Routes>
      )}
    </ModalCtx.Provider>
  );
};
export default LogInBtn;
