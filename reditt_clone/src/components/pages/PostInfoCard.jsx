import styles from "./AfterLogInHomePage.module.css";
import axios from "axios";
import { ThemeTogglerCtx } from "../../App";
import React, { useContext, useState } from "react";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsChatLeft } from "react-icons/bs";
import { usePost } from "../../Provider/PostInfoProvider";
import { getAuthHeaderConfig } from "../../utils/config";

const PostInfoCard = (props) => {
  const { toggleTheme } = useContext(ThemeTogglerCtx);
  const { setSelectedPost, selectedPost } = usePost();

  const { author, channel, commentCount, likeCount, content } = props;
  const [like, setLike] = useState(likeCount);
  const configs = getAuthHeaderConfig();

  const fetchingUpvotePost = async (postId) => {
    try {
      console.log(configs);
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        postId,
        configs
      );
      // console.log(res.data.status);
      if (res.data.status === "success") {
        setLike((prevState) => prevState + 1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpvoteLikeButton = () => {
    const postId = selectedPost._id;
    fetchingUpvotePost(postId);
  };

  const fetchingDevotePost = async (postId) => {
    try {
      console.log(configs);
      const res = await axios.delete(
        `https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        configs,
        postId
      );
      // console.log(res.data.status);
      if (res.data.status === "success") {
        setLike((prevState) => prevState - 1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDevoteLikeButton = () => {
    const postId = selectedPost._id;
    fetchingDevotePost(postId);
  };

  return (
    <section
      className={
        toggleTheme ? `${styles.postSect} ${styles.dark}` : `${styles.postSect}`
      }
      onClick={() => setSelectedPost(props)}
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
          onClick={handleUpvoteLikeButton}
        />
        <p>{like}</p>
        <TbArrowBigDown
          className={styles.devote}
          onClick={handleDevoteLikeButton}
        />
      </div>
      <div>
        <section className={styles.profileDetails}>
          <div
            className={styles.profileImg}
            style={{ backgroundImage: `url(${channel.image})` }}
          ></div>
          <p>r/{channel.name}.</p>
          <p className={styles.postedBy}>Posted by u/{author.name}</p>
          <p className={styles.postTime}>
            {Math.floor(Math.random() * (24 - 1)) + 1}
            <span>hours ago</span>{" "}
          </p>
        </section>
        <section className={styles.postContent}>
          <p>{content}</p>
        </section>
        <section className={styles.commentSect}>
          {" "}
          <BsChatLeft />
          <p> {commentCount} Comments</p>
        </section>
      </div>
    </section>
  );
};
export default React.memo(PostInfoCard);
