import styles from "./LogInModal.module.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getHeaderWithProjectIDAndBody } from "../../utils/config";
import axios from "axios";
import { ResetPassWordCtx } from "./LogInModal";

const ResetPassPage = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    passwordCurrent: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);
  const { setIsClickedResetPass } = useContext(ResetPassWordCtx);

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
    // console.log(userInfo);
  };

  const resetpasswordData = async (userInfo) => {
    userInfo.appType = "reddit";
    try {
      const headerConfig = getHeaderWithProjectIDAndBody();
      const res = await axios.patch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        userInfo,
        headerConfig
      );

      if (res.data.token) {
        sethasError(false);
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
      }
    } catch (err) {
      sethasError(true);
      setErrMessage(err.response.data.message);
      // console.error(err.response.data.message);
    }
  };

  const handleResetpassword = (event) => {
    event.preventDefault();
    resetpasswordData(userInfo);
  };

  const handleSwitchpage = () => {
    setIsClickedResetPass(false);
  };

  return (
    <div className={styles.first}>
      <h2 className={styles.heading}>Reset your password</h2>
      <p className={styles.para}>
        Tell us the username and email address associated with your Reddit
        account, and we’ll send you an email with a link to reset your password.
      </p>
      <form className={styles.signUpForm} onSubmit={handleResetpassword}>
        <input
          className={styles.userNameInp}
          type="text"
          name="name"
          placeholder="Username"
          value={userInfo.name}
          onChange={handleUserInput}
          //   required
        />
        <br />
        <input
          className={styles.emailInp}
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleUserInput}
          //   required
        />
        <br />
        <input
          className={styles.signUpPassInp}
          type="password"
          name="passwordCurrent"
          placeholder="Current Password"
          value={userInfo.passwordCurrent}
          onChange={handleUserInput}
          //   required
        />
        <input
          className={styles.signUpPassInp}
          type="password"
          name="password"
          placeholder="New Password"
          value={userInfo.password}
          onChange={handleUserInput}
          //   required
        />
        {hasError && <p className={styles.errorMsg}>{errMessage}</p>}

        <button className={styles.loginBtn}>Reset Password</button>

        <Link to="/" onClick={handleSwitchpage}>
          Back
        </Link>
      </form>
    </div>
  );
};
export default ResetPassPage;
