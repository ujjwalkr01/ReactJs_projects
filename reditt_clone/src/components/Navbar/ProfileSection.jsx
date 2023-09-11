import { useState, useContext } from "react";
import styles from "./ProfileSection.module.css";
import { GrDown, GrDiamond } from "react-icons/gr";
import { BsPersonGear, BsBoxArrowRight, BsPeople } from "react-icons/bs";
import ToggleSwitch from "./ToggleSwitch";
import { TfiEye } from "react-icons/tfi";
import { ImBullhorn } from "react-icons/im";
import { FcVip } from "react-icons/fc";
import { RiDraftLine, RiScales3Line } from "react-icons/ri";
import { CheckLogInStat, ThemeTogglerCtx } from "../../App";
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const { toggleTheme } = useContext(ThemeTogglerCtx);
  const { setIsNotLoggedIn } = useContext(CheckLogInStat);
  const { setToggleTheme } = useContext(ThemeTogglerCtx);

  const navigate = useNavigate();

  const userName = JSON.parse(sessionStorage.getItem("userInfo"));

  const handleOnProfileClick = () => {
    setShowProfileModal((prevState) => !prevState);
  };

  const handleLogOut = () => {
    setIsNotLoggedIn(true);
    setToggleTheme(false);
    navigate("/");
    sessionStorage.removeItem("logInStatus");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("authToken");
  };

  return (
    <>
      <div className={styles.profileInfo} onClick={handleOnProfileClick}>
        <section>
          <div className={styles.avatarImg}></div>
          <article>
            <p>{userName}</p>
            <p className={styles.madeBy}>
              <GrDiamond />
              ujjwl
            </p>
          </article>
        </section>
        <GrDown />
      </div>
      {showProfileModal && (
        <section
          className={
            toggleTheme ? `${styles.modal} ${styles.dark}` : `${styles.modal}`
          }
        >
          <article className={styles.notActive}>
            <BsPersonGear />
            <p>My Stuff</p>
          </article>
          <ul>
            <li
              className={styles.toggler1}
              onClick={() => setShowProfileModal(true)}
            >
              <p>Online Status</p>
              <ToggleSwitch />
            </li>
            <li
              onClick={() => {
                navigate(`/user/${userName}`);
              }}
            >
              Profile
            </li>
            <li>Style Avatar</li>
            <li>User Settings</li>
            <hr />
          </ul>
          <article className={styles.notActive}>
            <TfiEye />
            <p>View Options</p>
          </article>
          <ul>
            <li className={styles.toggler2}>
              <p>Dark Mode</p>
              <ToggleSwitch value="darkMode" />
            </li>
            <hr />
          </ul>
          <ul className={styles.thirdSection}>
            <li>
              <BsPeople />
              Create a Community
            </li>
            <li>
              <ImBullhorn />
              Advertise on Reddit
            </li>
            <li>
              <FcVip />
              Premium
            </li>
            <li>
              <RiDraftLine />
              Terms and Policies
            </li>
            <li>
              <RiScales3Line />
              Content Policy
            </li>
            <hr />
            <li className={styles.logout} onClick={handleLogOut}>
              <BsBoxArrowRight />
              Log Out
            </li>
          </ul>
          <p className={styles.copyright}>
            Reddit Inc. &copy; 2023. All rights reserved
          </p>
        </section>
      )}
    </>
  );
};
export default ProfileSection;
