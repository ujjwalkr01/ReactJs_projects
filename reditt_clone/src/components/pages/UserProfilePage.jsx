import styles from "./UserProfilePage.module.css";
import { ThemeTogglerCtx } from "../../App";
import { useContext } from "react";

const UserProfilePage = () => {
  //   const { toggleTheme, setToggleTheme } = useContext(ThemeTogglerCtx);
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.listContainer}>
          <ul>
            <li>Overview</li>
            <li>Post</li>
            <li>Comments</li>
            <li>Upvoted</li>
            <li>DownVoted</li>
          </ul>
        </div>
      </div>
      <div className={styles.anotherDiv}></div>
    </>
  );
};
export default UserProfilePage;
