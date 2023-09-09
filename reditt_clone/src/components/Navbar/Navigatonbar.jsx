import styles from "./Navigationbar.module.css";
import GetAppBtn from "./GetAppBtn";
import LogInBtn from "./LogInBtn";
import SettingModal from "./SettingModal";
import SearchInput from "./SearchInput";

const Navigatonbar = (props) => {
  return (
    <div className={styles.parentContainer}>
      <img className={styles.logo} src="/images/redditFace.svg" />
      <img className={styles.logoText} src="/images/redditText.svg" />
      <SearchInput />
      <div className={styles.btnContainer}>
        <GetAppBtn />
        <LogInBtn />
        <SettingModal />
      </div>
    </div>
  );
};
export default Navigatonbar;
