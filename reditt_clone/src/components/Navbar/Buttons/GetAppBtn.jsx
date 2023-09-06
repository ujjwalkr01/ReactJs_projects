import styles from "./Buttons.module.css";

const GetAppBtn = () => {
  return (
    <button className={styles.getAppbtn}>
      <img
        className={styles.qrimg}
        src="https://www.seekpng.com/png/detail/128-1285139_qr-code-qr-code-icon-png.png"
      />
      <span className={styles.text}> Get app</span>
    </button>
  );
};
export default GetAppBtn;
