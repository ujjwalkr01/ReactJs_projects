import { useContext, useState } from "react";
import styles from "./LogInModal.module.css";
import axios from "axios";
import { getHeaderWithProjectIDAndBody } from "../../utils/config";
import { CheckLogInStat } from "../../App";

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);
  const { setIsNotLoggedIn } = useContext(CheckLogInStat);
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
    // console.log(userInfo);
  };

  const signUp = async (userInfo) => {
    userInfo.appType = "reddit";
    try {
      const headerConfig = getHeaderWithProjectIDAndBody();
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        userInfo,
        headerConfig
      );

      console.log(res);
      if (res.data.token) {
        sethasError(false);
        setIsNotLoggedIn(false);
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
      }
    } catch (err) {
      sethasError(true);
      setErrMessage(err.response.data.message);
      // console.error(err.response.data.message);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    signUp(userInfo);
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSignUp}>
      <input
        className={styles.userNameInp}
        type="text"
        name="name"
        placeholder="Username"
        value={userInfo.name}
        onChange={handleUserInput}
        required
      />
      <br />
      <input
        className={styles.emailInp}
        type="email"
        name="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={handleUserInput}
        required
      />
      <br />
      <input
        className={styles.signUpPassInp}
        type="password"
        name="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={handleUserInput}
        required
      />
      {hasError && <p className={styles.errorMsg}>{errMessage}</p>}

      <button className={styles.loginBtn}>Continue</button>
    </form>
  );
};
export default SignUpPage;
