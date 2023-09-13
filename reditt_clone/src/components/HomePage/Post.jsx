import axios from "axios";
import { getHeaderWithProjectId } from "../../utils/config";
import { useEffect, useState, useContext } from "react";
import styles from "./Post.module.css";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsChatLeft, BsUpload } from "react-icons/bs";
import { ModalCtx } from "../../App";

const Post = (props) => {
  const [postDataList, setPostData] = useState([]);
  const { setShowModal } = useContext(ModalCtx);
  let [page, setPage] = useState(1);

  const fetchPostData = async () => {
    try {
      const config = getHeaderWithProjectId();
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post?page=${page}&limit=10`,
        config
      );
      // console.log(res.data);
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

  const handleLogInModal = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.parentContainer}>
      <button onClick={handleLogInModal}>
        <div className={styles.createBtn}></div>
        <p>Create a post</p>
      </button>
      <div>
        {postDataList.map((el, indx) => (
          <>
            <section className={styles.listCont} key={indx}>
              <div className={styles.channelDetails}>
                <div
                  className={styles.profileImg}
                  style={{ backgroundImage: `url(${el.channel.image})` }}
                ></div>
                <p>r/{el.channel.name}</p>
                <p className={styles.postedBy}>Posted by u/{el.author.name}</p>
                <p className={styles.postTime}>
                  {Math.floor(Math.random() * (24 - 1)) + 1}
                  <span>hours ago</span>{" "}
                </p>
              </div>
              <div className={styles.contents}>{el.content}</div>
              <div className={styles.like_commBtn}>
                <button>
                  <TbArrowBigUp
                    className={styles.upvote}
                    onClick={handleLogInModal}
                  />
                  <p>{el.likeCount}</p>
                  <TbArrowBigDown
                    className={styles.devote}
                    onClick={handleLogInModal}
                  />
                </button>
                <button className={styles.comment} onClick={handleLogInModal}>
                  <BsChatLeft />
                  <p> {el.commentCount}</p>
                </button>
                <button className={styles.share} onClick={handleLogInModal}>
                  <BsUpload />
                  <p>Share</p>
                </button>
              </div>
            </section>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};
export default Post;
