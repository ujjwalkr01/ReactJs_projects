import styles from "./LogInModal.module.css";
import { Link } from "react-router-dom";
const LogInPage = () => {
  return (
    <div className={styles.second}>
      <input className={styles.emailInp} type="text" placeholder="Username" />
      <br />
      <input
        className={styles.passInp}
        type="password"
        placeholder="Password"
      />
      <p className={styles.reset}>
        Forgot your <Link to="/">username</Link> or <Link to="/">password</Link>
        ?
      </p>
      <button className={styles.loginBtn}>Log In</button>
    </div>
  );
};
export default LogInPage;
