import axios from "axios";
import { getHeaderWithProjectId } from "../../utils/config";
import { useEffect, useState, useContext } from "react";
import styles from "./AfterLogInHomePage.module.css";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsChatLeft } from "react-icons/bs";
import { TfiImage, TfiLink } from "react-icons/tfi";
import { ThemeTogglerCtx } from "../../App";

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
      console.log(res.data);
      const postData = res.data.data;
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
      </section>
      {postDataList.map((el, indx) => (
        <section
          key={indx}
          className={
            toggleTheme
              ? `${styles.postSect} ${styles.dark}`
              : `${styles.postSect}`
          }
        >
          <div
            className={
              toggleTheme
                ? `${styles.likeSect} ${styles.darkLike}`
                : `${styles.likeSect}`
            }
          >
            <TbArrowBigUp
              className={styles.upvote}
              // onClick={handleLogInModal}
            />
            <p>{el.likeCount}</p>
            <TbArrowBigDown
              className={styles.devote}
              // onClick={handleLogInModal}
            />
          </div>
          <div>
            <section className={styles.profileDetails}>
              <div
                className={styles.profileImg}
                style={{ backgroundImage: `url(${el.channel.image})` }}
              ></div>
              <p>r/{el.channel.name}.</p>
              <p className={styles.postedBy}>
                Posted by u/{Math.random().toString(36).substring(2, 10)}
              </p>
              <p className={styles.postTime}>
                {Math.floor(Math.random() * (24 - 1)) + 1}
                <span>hours ago</span>{" "}
              </p>
            </section>
            <section className={styles.postContent}>
              <p>{el.content}</p>
            </section>
            <section className={styles.commentSect}>
              {" "}
              <BsChatLeft />
              <p> {el.commentCount} Comments</p>
            </section>
          </div>
        </section>
      ))}
    </main>
  );
};
export default AfterLogInHomePage;
