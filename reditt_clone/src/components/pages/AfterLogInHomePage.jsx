import axios from "axios";
import { getHeaderWithProjectId } from "../../utils/config";
import { useEffect, useState, useContext, useRef } from "react";
import styles from "./AfterLogInHomePage.module.css";
import { TfiImage, TfiLink } from "react-icons/tfi";
import { ThemeTogglerCtx } from "../../App";
import PostInfoCard from "./PostInfoCard";
import { PostInfoProvider } from "../../Provider/PostInfoProvider";
import { FcVip } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AfterLogInHomePage = () => {
  const [postDataList, setPostData] = useState([]);
  let [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { toggleTheme } = useContext(ThemeTogglerCtx);

  const fetchPostData = async () => {
    try {
      const config = getHeaderWithProjectId();
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post?page=${page}&limit=10`,
        config
      );
      console.log(res.data);
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
      <div className={styles.mainContainer}>
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
          {postDataList.map((ele) => (
            <PostInfoCard key={ele._id} {...ele} />
          ))}
        </main>
        <section className={styles.secParentContainer}>
          <div
            className={
              toggleTheme
                ? `${styles.firstSecPrem} ${styles.dark}`
                : `${styles.firstSecPrem}`
            }
          >
            <section>
              <FcVip className={styles.premLogo} />
              <div>
                <p>Reddit Premium</p>
                <p>The best Reddit experience</p>
              </div>
            </section>
            <button onClick={() => navigate("/premium")}>Try Now</button>
          </div>
          <div
            className={
              toggleTheme
                ? `${styles.SecSectCreateComm} ${styles.dark}`
                : `${styles.SecSectCreateComm}`
            }
          >
            <div></div>
            <div className={styles.secLogo}>
              <img
                src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c531.png"
                width="60rem"
                height="60rem"
              />
              <p>Home</p>
            </div>
            <p>
              Your personal Reddit frontpage. Come here to check in with your
              favorite communities.
            </p>
            <button
              className={styles.postBtn}
              onClick={() => navigate("/blank")}
            >
              Create Post
            </button>
            <br />
            <button onClick={() => navigate("/blank")}>Create Community</button>
          </div>
          <div
            className={
              toggleTheme
                ? `${styles.thirdSec} ${styles.dark}`
                : `${styles.thirdSec}`
            }
          >
            <div>
              <div>
                <p>User Agreement</p>
                <p>Privacy Policy</p>
              </div>
              <div>
                <p>Content</p>
                <p>Moderator Code of Conduct</p>
              </div>
            </div>
            <p>Reddit Inc. &copy; 2023. All rights reserved</p>
          </div>
        </section>
      </div>
    </PostInfoProvider>
  );
};
export default AfterLogInHomePage;
