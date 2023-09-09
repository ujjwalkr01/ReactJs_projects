import { Link } from "react-router-dom";
import styles from "./LogInModal.module.css";
import { createContext, useContext, useState } from "react";
import { ModalCtx } from "../../App";
import LogInPage from "./LogInPage";
import SignInPage from "./SignUpPage";
import ResetPassPage from "./ResetPassPage";

export const ResetPassWordCtx = createContext();

const LogInModal = (props) => {
  const { setShowModal } = useContext(ModalCtx);
  const [switchLogInSignUp, setSwitchLogInSignUp] = useState(false);
  const [isClickedResetPass, setIsClickedResetPass] = useState(false);

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
      <ResetPassWordCtx.Provider
        value={{
          setIsClickedResetPass,
          setSwitchLogInSignUp,
          switchLogInSignUp,
        }}
      >
        {!isClickedResetPass && (
          <>
            <div className={styles.first}>
              <h2 className={styles.heading}>
                {!switchLogInSignUp ? "Log In" : "Sign Up"}
              </h2>
              <p className={styles.para}>
                By continuing, you are setting up a Reddit account and agree to
                our
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
            {!switchLogInSignUp && !isClickedResetPass && <LogInPage />}
            {switchLogInSignUp && <SignInPage />}
            {!switchLogInSignUp && !isClickedResetPass ? (
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
          </>
        )}
        {isClickedResetPass && (
          <ResetPassPage switchLogIn={handleSwitchingPage} />
        )}
      </ResetPassWordCtx.Provider>
    </div>
  );
};
export default LogInModal;
