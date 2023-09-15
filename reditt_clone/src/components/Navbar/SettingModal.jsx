import styles from "./Buttons.module.css";
import { useState, useRef, useEffect, useContext } from "react";
import { BsBoxArrowInRight, BsHandbag } from "react-icons/bs";
import { MdAdsClick } from "react-icons/md";
import { ModalCtx } from "../../App";
import { useNavigate } from "react-router-dom";

const SettingModal = () => {
  const [settingModal, showSettingModal] = useState(false);
  const profileIconRef = useRef(null);
  const { setShowModal } = useContext(ModalCtx);
  const navigate = useNavigate();
  useEffect(() => {
    const hideModal = (e) => {
      // console.log("e.target", e.target);
      if (profileIconRef.current.contains(e.target)) {
        return;
      }
      showSettingModal(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  const handleOnClick = () => {
    showSettingModal((prevState) => !prevState);
  };
  return (
    <>
      <button
        className={styles.setting}
        onClick={handleOnClick}
        ref={profileIconRef}
      >
        ...
      </button>
      {settingModal && (
        <section className={styles.modal}>
          <ul>
            <li onClick={() => setShowModal(true)}>
              <BsBoxArrowInRight />
              Log In / Sign Up
            </li>
            <li onClick={() => navigate("/blank")}>
              <MdAdsClick />
              Advertise on Reddit
            </li>
            <li>
              <BsHandbag />
              <a href="https://www.reddit.com/avatar/shop" target="_blank">
                Shop Collective Avatars
              </a>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};
export default SettingModal;
