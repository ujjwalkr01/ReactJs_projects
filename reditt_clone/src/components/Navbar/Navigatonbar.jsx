import styles from "./Navigationbar.module.css";
import GetAppBtn from "./GetAppBtn";
import LogInBtn from "./LogInBtn";
import SettingModal from "./SettingModal";
import SearchInput from "./SearchInput";
import { useContext } from "react";
import { CheckLogInStat, ThemeTogglerCtx } from "../../App";
import {
  BsArrowUpRightCircle,
  BsChatDots,
  BsBell,
  BsPlusLg,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { GrAnnounce, GrDown } from "react-icons/gr";
import ProfileSection from "./ProfileSection";

const Navigatonbar = (props) => {
  const { isLoggedIn } = useContext(CheckLogInStat);
  const { toggleTheme } = useContext(ThemeTogglerCtx);

  return (
    <div
      className={
        toggleTheme
          ? `${styles.parentContainer} ${styles.dark}`
          : `${styles.parentContainer}`
      }
    >
      <img className={styles.logo} src="/images/redditFace.svg" />
      <img className={styles.logoText} src="/images/redditText.svg" />
      {isLoggedIn && (
        <div className={styles.filter}>
          <section>
            <BsFillHouseDoorFill /> <p>Home</p>
          </section>
          <GrDown />
        </div>
      )}
      <SearchInput />
      {!isLoggedIn && (
        <div className={styles.btnContainer}>
          <GetAppBtn />
          <LogInBtn />
          <SettingModal />
        </div>
      )}
      {isLoggedIn && (
        <div className={styles.loginContainer}>
          <BsArrowUpRightCircle className={styles.popular} />
          <BsChatDots />
          <BsBell />
          <BsPlusLg />
          <button>
            <GrAnnounce />
          </button>
          <ProfileSection />
        </div>
      )}
    </div>
  );
};
export default Navigatonbar;
