import { useContext, useState } from "react";
import styles from "./LogInModal.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getHeaderWithProjectIDAndBody } from "../../utils/config";
import axios from "axios";
import { CheckLogInStat, ModalCtx } from "../../App";
import { ResetPassWordCtx } from "./LogInModal";

const LogInPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);
  const navigate = useNavigate();

  const { setIsNotLoggedIn } = useContext(CheckLogInStat);
  const { setShowModal } = useContext(ModalCtx);
  const { setIsClickedResetPass } = useContext(ResetPassWordCtx);

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const fetchLogInData = async (userInfo) => {
    userInfo.appType = "reddit";

    try {
      const headerconfigs = getHeaderWithProjectIDAndBody();
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        userInfo,
        headerconfigs
      );
      console.log(res.data.data.name);
      if (res.data.token) {
        sethasError(false);
        setIsNotLoggedIn(false);
        setShowModal(false);
        navigate("/user/home=true");
        sessionStorage.setItem("logInStatus", true);
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.name));
      }
    } catch (err) {
      sethasError(true);
      setErrMessage(err.response.data.message);
      console.error(err.response.data.message);
    }
  };

  const handleLogInSubmit = (event) => {
    event.preventDefault();
    fetchLogInData(userInfo);
  };

  const handleResetpassword = () => {
    setIsClickedResetPass(true);
  };
  return (
    <form className={styles.logInForm} onSubmit={handleLogInSubmit}>
      <input
        className={styles.emailInp}
        type="text"
        placeholder="Username"
        name="email"
        value={userInfo.email}
        onChange={handleUserInput}
      />
      <br />
      <input
        className={styles.passInp}
        type="password"
        placeholder="Password"
        name="password"
        value={userInfo.password}
        onChange={handleUserInput}
      />
      <p className={styles.reset}>
        Forgot your{" "}
        <Link to="/" onClick={handleResetpassword}>
          username
        </Link>{" "}
        or{" "}
        <Link to="/" onClick={handleResetpassword}>
          password
        </Link>
        ?
      </p>
      {hasError && <p className={styles.errorMsg}>{errMessage}!</p>}
      <button className={styles.loginBtn}>Log In</button>
    </form>
  );
};
export default LogInPage;
