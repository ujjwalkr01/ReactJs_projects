import axios from "axios";
import { getHeaderWithProjectId } from "../../utils/config";
import { useEffect, useState, useContext } from "react";
import styles from "./AfterLogInHomePage.module.css";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsChatLeft, BsUpload } from "react-icons/bs";
import { ModalCtx } from "../../App";

const AfterLogInHomePage = () => {
  const [postDataList, setPostData] = useState([]);

  const fetchPostData = async () => {
    try {
      const config = getHeaderWithProjectId();
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/reddit/post",
        config
      );
      console.log(res.data);
      const postData = res.data.data;
      setPostData(postData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <main className={styles.parentContainer}>
      {postDataList.map((el, indx) => (
        <section key={indx}>
          <p>{el.channel.name}</p>
        </section>
      ))}
    </main>
  );
};
export default AfterLogInHomePage;
