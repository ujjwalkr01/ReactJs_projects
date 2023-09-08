import { createContext, useState } from "react";
import styles from "./Buttons.module.css";
import GetAppModal from "../../Modal/GetAppModal";

export const GetAppCtx = createContext();

const GetAppBtn = () => {
  const [showGetAppModal, setShowGetAppModal] = useState(false);

  const handleGetAppModal = () => {
    setShowGetAppModal(true);
  };

  return (
    <GetAppCtx.Provider value={{ showGetAppModal, setShowGetAppModal }}>
      <button className={styles.getAppbtn} onClick={handleGetAppModal}>
        <img src="https://www.seekpng.com/png/detail/128-1285139_qr-code-qr-code-icon-png.png" />
        <span> Get app</span>
      </button>

      {showGetAppModal && <GetAppModal />}
    </GetAppCtx.Provider>
  );
};
export default GetAppBtn;
