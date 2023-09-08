import styles from "./LogInModal.module.css";

const SignInPage = () => {
  return (
    <div className={styles.second}>
      <input
        className={styles.userNameInp}
        type="text"
        placeholder="Username"
      />
      <br />
      <input className={styles.emailInp} type="email" placeholder="Email" />
      <br />
      <input
        className={styles.signUpPassInp}
        type="password"
        placeholder="Password"
      />
      <button className={styles.loginBtn}>Continue</button>
    </div>
  );
};
export default SignInPage;
