import styles from "./RightContent.module.css";
import ModalBtn from "./Buttons/ModalBtn";
import GetAppBtn from "./Buttons/GetAppBtn";
import LogInBtn from "./Buttons/LogInBtn";

const RightContent = (props) => {
  return (
    <div className={styles.parentContainer}>
      <GetAppBtn />
      <LogInBtn />
      <ModalBtn />
    </div>
  );
};
export default RightContent;
