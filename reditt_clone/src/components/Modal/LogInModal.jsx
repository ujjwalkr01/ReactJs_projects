import { Link } from "react-router-dom";
import styles from "./LogInModal.module.css";
import { useContext } from "react";
import { ModalCtx } from "../Navbar/Buttons/LogInBtn";

const LogInModal = (props) => {
  const { setShowModal } = useContext(ModalCtx);
  console.log("hi i m clicked");
  const handleCloseBtn = () => {
    setShowModal(false);
  };
  return (
    <div className={styles["overview-window"]}>
      <button className={styles["btn_close"]} onClick={handleCloseBtn}>
        &times;
      </button>
      <div className={styles.first}>
        <h2 className={styles.heading}>Log In</h2>
        <p className={styles.para}>
          By continuing, you are setting up a Reddit account and agree to our
          User Agreement and Privacy Policy.
        </p>
        <button></button>
      </div>
      <hr />
      <div className={styles.second}>
        <input type="email" placeholder="Username" required />
        <br />
        <input type="password" placeholder="Password" required />
        <p>
          Forgot your <a href="">username</a> or <a href="">password</a>?
        </p>
      </div>
      <button>Log In</button>
    </div>
  );
};
export default LogInModal;
