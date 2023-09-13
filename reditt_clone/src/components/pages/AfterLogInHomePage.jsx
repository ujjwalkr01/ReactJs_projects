import axios from "axios";
import { getHeaderWithProjectId } from "../../utils/config";
import { useEffect, useState, useContext, useRef } from "react";
import styles from "./AfterLogInHomePage.module.css";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsChatLeft } from "react-icons/bs";
import { TfiImage, TfiLink } from "react-icons/tfi";
import { ThemeTogglerCtx } from "../../App";
import PostInfoCard from "./PostInfoCard";
import { PostInfoProvider } from "../../Provider/PostInfoProvider";
import ProfilePage from "./ProfilePage";

const AfterLogInHomePage = () => {
  const [postDataList, setPostData] = useState([]);
  let [page, setPage] = useState(1);

  const { toggleTheme } = useContext(ThemeTogglerCtx);

  const fetchPostData = async () => {
    try {
      const config = getHeaderWithProjectId();
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post?page=${page}&limit=10`,
        config
      );
      //  console.log(res.data);
      setPostData([...postDataList, ...res.data.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PostInfoProvider>
      <main className={styles.parentContainer}>
        <section
          className={
            toggleTheme
              ? `${styles.createPostSect} ${styles.dark}`
              : `${styles.createPostSect}`
          }
        >
          <div className={styles.avatarCreate}></div>
          <input type="text" placeholder="Create Post" />
          <TfiImage className={styles.createPost} />
          <TfiLink className={styles.createPost} />
          <ProfilePage />
        </section>
        {postDataList.map((ele, indx) => (
          <PostInfoCard key={indx} {...ele} />
        ))}
      </main>
    </PostInfoProvider>
  );
};
export default AfterLogInHomePage;
