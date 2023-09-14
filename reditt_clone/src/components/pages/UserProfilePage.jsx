import styles from "./UserProfilePage.module.css";
import { ThemeTogglerCtx } from "../../App";
import React, { useContext, useState, useEffect } from "react";
import { BsCalendarMonth, BsFillPersonFill } from "react-icons/bs";
import { GrDiamond } from "react-icons/gr";

function getRandomDate(startDate, endDate) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp =
    startTimestamp + Math.random() * (endTimestamp - startTimestamp);
  return new Date(randomTimestamp);
}

const UserProfilePage = () => {
  const { toggleTheme, setToggleTheme } = useContext(ThemeTogglerCtx);
  const userName = JSON.parse(sessionStorage.getItem("userInfo"));
  const [randomDate, setRandomDate] = useState(null);

  const generateRandomDate = () => {
    const startDate = new Date("2000-01-01");
    const endDate = new Date("2023-12-31");
    const randomDate = getRandomDate(startDate, endDate);
    setRandomDate(randomDate);
  };

  useEffect(() => {
    generateRandomDate();
  }, []);

  return (
    <>
      <div
        className={
          toggleTheme
            ? `${styles.parentContainer} ${styles.dark}`
            : `${styles.parentContainer}`
        }
      >
        <div className={styles.coverPhoto}></div>
        <div className={styles.profilePhoto}></div>
        <p className={styles.profileName}>{userName}</p>
        <div className={styles.details}>
          <p>
            <BsFillPersonFill className={styles.userLogo} />
            u/{userName}
          </p>
          <p>
            <span>Karma:</span> <GrDiamond />
            {Math.floor(Math.random() * (10 - 1)) + 1}
          </p>
          <p>
            <span>Cake Day:</span> <BsCalendarMonth />
            {randomDate ? `${randomDate.toDateString()}` : ""}
          </p>
        </div>
      </div>
    </>
  );
};
export default React.memo(UserProfilePage);
