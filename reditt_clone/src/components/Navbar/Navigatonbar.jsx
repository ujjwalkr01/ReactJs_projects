import styles from "./Navigationbar.module.css";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent";

const Navigatonbar = (props) => {
  return (
    <div className={styles.parentContainer}>
      <img className={styles.logo} src="/images/redditFace.svg" />
      <img className={styles.logoText} src="/images/redditText.svg" />
      <SearchInput />
      <RightContent />
    </div>
  );
};
export default Navigatonbar;
