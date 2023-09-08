import { Link } from "react-router-dom";
import styles from "./LogInModal.module.css";
import { useContext, useState } from "react";
import { ModalCtx } from "../Navbar/Buttons/LogInBtn";
import LogInPage from "./LogInPage";
import SignInPage from "./SignInPage";

const LogInModal = (props) => {
  const { setShowModal } = useContext(ModalCtx);
  const [switchLogInSignUp, setSwitchLogInSignUp] = useState(false);

  // console.log("hi i m clicked");
  const handleCloseBtn = () => {
    setShowModal(false);
  };

  const handleSwitchingPage = () => {
    setSwitchLogInSignUp((prevState) => !switchLogInSignUp);
  };

  return (
    <div className={styles["overview-window"]}>
      <button className={styles["btn_close"]} onClick={handleCloseBtn}>
        &times;
      </button>
      <div className={styles.first}>
        {!switchLogInSignUp ? (
          <h2 className={styles.heading}>Log In</h2>
        ) : (
          <h2 className={styles.heading}>Sign Up</h2>
        )}
        <p className={styles.para}>
          By continuing, you are setting up a Reddit account and agree to our
          <Link to="/"> User Agreement</Link> and{" "}
          <Link to="/">Privacy Policy</Link>.
        </p>
        <button className={styles.signGoogleBtn}>
          <img src="./images/googlelogo.png" width="20px" height="20px" />
          <span className={styles.btnText}>Continue with Google</span>
        </button>
        <br />
      </div>
      <hr />
      {!switchLogInSignUp && <LogInPage />}
      {switchLogInSignUp && <SignInPage />}
      {!switchLogInSignUp ? (
        <p>
          New to Reddit?{" "}
          <Link to="/" onClick={handleSwitchingPage}>
            Sign UP
          </Link>
        </p>
      ) : (
        <p>
          Already a redditor?{" "}
          <Link to="/" onClick={handleSwitchingPage}>
            Log In
          </Link>
        </p>
      )}
    </div>
  );
};
export default LogInModal;
