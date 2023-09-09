import styles from "./Navigationbar.module.css";
import GetAppBtn from "./GetAppBtn";
import LogInBtn from "./LogInBtn";
import SettingModal from "./SettingModal";

const Navigatonbar = (props) => {
  return (
    <div className={styles.parentContainer}>
      <img className={styles.logo} src="/images/redditFace.svg" />
      <img className={styles.logoText} src="/images/redditText.svg" />
      <div className={styles.searchContainer}>
        <input
          className={styles.noSubmit}
          type="search"
          placeholder="Search Reddit"
        />
      </div>
      <div className={styles.btnContainer}>
        <GetAppBtn />
        <LogInBtn />
        <SettingModal />
      </div>
    </div>
  );
};
export default Navigatonbar;
