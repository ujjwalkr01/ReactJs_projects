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
import { useNavigate } from "react-router-dom";

const Navigatonbar = (props) => {
  const { isLoggedIn } = useContext(CheckLogInStat);
  const { toggleTheme } = useContext(ThemeTogglerCtx);
  const navigate = useNavigate();

  return (
    <div
      id="mainNav"
      className={
        toggleTheme
          ? `${styles.parentContainer} ${styles.dark}`
          : `${styles.parentContainer}`
      }
    >
      <img
        onClick={() => navigate("/user/home=true")}
        className={styles.logo}
        src="/images/redditFace.svg"
      />
      <img
        onClick={() => navigate("/user/home=true")}
        className={styles.logoText}
        src="/images/redditText.svg"
      />
      {isLoggedIn && (
        <div className={styles.filter} onClick={() => navigate("/blank")}>
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
          <BsArrowUpRightCircle
            className={styles.popular}
            onClick={() => navigate("/blank")}
          />
          <BsChatDots
            className={styles.btn}
            onClick={() => navigate("/blank")}
          />
          <BsBell className={styles.btn} onClick={() => navigate("/blank")} />
          <BsPlusLg
            className={styles.plusSign}
            onClick={() => navigate("/blank")}
          />
          <button onClick={() => navigate("/blank")}>
            <GrAnnounce />
          </button>
          <ProfileSection />
        </div>
      )}
    </div>
  );
};
export default Navigatonbar;
