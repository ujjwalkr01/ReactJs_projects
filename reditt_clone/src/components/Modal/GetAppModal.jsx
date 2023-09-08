import { useContext, useEffect } from "react";
import styles from "./GetAppModal.module.css";
import { GetAppCtx } from "../Navbar/Buttons/GetAppBtn";

const GetAppModal = () => {
  const { showGetAppModal, setShowGetAppModal } = useContext(GetAppCtx);

  useEffect(() => {
    if (showGetAppModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showGetAppModal]);

  return (
    <div className={styles["overview-window"]}>
      <button
        className={styles["btn_close"]}
        onClick={() => setShowGetAppModal(false)}
      >
        &times;
      </button>
      <h1>Get the Reddit app</h1>
      <div className={styles.innerDiv}>
        <p>Scan this QR code to download the app now</p>
        <img src="https://i.pinimg.com/564x/77/f6/8e/77f68ea939566849943001c3648bf5c3.jpg" />
        <p>Or check it out in the app stores</p>
      </div>
      <div className={styles.buttonsDiv}>
        <a
          href="https://play.google.com/store/apps/details?id=com.reddit.frontpage&pli=1"
          title="Image from freepnglogos.com"
        >
          <img
            src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png"
            width="150"
            alt="play store logo black background hd picture"
          />
        </a>
        <a href="https://apps.apple.com/US/app/id1064216828">
          <img
            src="https://www.seekpng.com/png/detail/223-2231228_app-store-apple-transprent-download-on-apple-store.png"
            width="130"
            alt="App Store Apple Transprent - Download On Apple Store Icon@seekpng.com"
          />
        </a>
      </div>
    </div>
  );
};
export default GetAppModal;
