import { createContext, useState } from "react";
import styles from "./Buttons.module.css";
import GetAppModal from "../Modal/GetAppModal";
import { BsQrCodeScan } from "react-icons/bs";

export const GetAppCtx = createContext();

const GetAppBtn = () => {
  const [showGetAppModal, setShowGetAppModal] = useState(false);

  const handleGetAppModal = () => {
    setShowGetAppModal(true);
  };

  return (
    <GetAppCtx.Provider value={{ showGetAppModal, setShowGetAppModal }}>
      <button className={styles.getAppbtn} onClick={handleGetAppModal}>
        <p>
          <BsQrCodeScan /> Get app
        </p>
      </button>

      {showGetAppModal && <GetAppModal />}
    </GetAppCtx.Provider>
  );
};
export default GetAppBtn;
