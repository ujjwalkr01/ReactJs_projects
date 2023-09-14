import styles from "./AfterLogInHomePage.module.css";
import axios from "axios";
import { ThemeTogglerCtx } from "../../App";
import React, { useContext, useRef, useState } from "react";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsChatLeft, BsFillPersonFill } from "react-icons/bs";
import { usePost } from "../../Provider/PostInfoProvider";
import { getAuthHeaderConfig } from "../../utils/config";
import { TfiArrowRight } from "react-icons/tfi";

const PostInfoCard = (props) => {
  const { toggleTheme } = useContext(ThemeTogglerCtx);
  const { setSelectedPost, selectedPost } = usePost();
  const [comments, setComments] = useState([]);

  const inputRef = useRef();

  const { author, channel, commentCount, likeCount, content, _id } = props;
  const [like, setLike] = useState(likeCount);
  const configs = getAuthHeaderConfig();
  const [openCommentSec, setOpenCommentSec] = useState(false);
  const [countComment, setCountComment] = useState(commentCount);
  // const userName = JSON.parse(sessionStorage.getItem("userInfo"));
  // let arr=JSON.parse(sessionStorage.getItem('like'));
  // if(arr==null){
  //   arr=[];
  // }

  const fetchingUpvotePost = async (postId) => {
    try {
      console.log(configs);
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        postId,
        configs
      );

      if (res.data.status === "success") {
        setLike((prevState) => prevState + 1);
        // sessionStorage.setItem('like',userName);
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

      if (res.data.status === "success") {
        setLike((prevState) => prevState - 1);
        // sessionStorage.setItem('like',userName);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDevoteLikeButton = () => {
    const postId = selectedPost._id;
    fetchingDevotePost(postId);
  };

  const fetchingCommentsPost = async (postId) => {
    try {
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/reddit/post/${postId}/comments`,
        configs,
        postId
      );

      // console.log(res.data.data[0], res.data.data[1], res.data.data[2]);
      const childrenData = res.data.data[0].children;

      if (res.data.status === "success") {
        setComments([...childrenData, ...res.data.data]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCommentSec = () => {
    const postId = selectedPost._id;
    setOpenCommentSec((prevState) => !prevState);
    if (!openCommentSec) {
      fetchingCommentsPost(postId);
    }
  };

  const postCommentData = async (inputData) => {
    try {
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/reddit/comment/${selectedPost._id}`,
        {
          postId: `${selectedPost._id}`,
          content: `${inputData}`,
          appType: "reddit",
        },
        configs
      );

      // console.log(
      //   res.data.data.content,
      //   res.data.data.createdAt,
      //   res.data.data.createdAt
      // );
      const data = [res.data.data];
      if (res.data.status === "success") {
        setComments([...comments, ...data]);
        setCountComment(commentCount + 1);
        console.log(Comment);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePostComment = () => {
    postCommentData(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <section
      id={`postList${_id}`}
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
          <div className={styles.commentSymbol}>
            <BsChatLeft />
            <p onClick={handleCommentSec}> {countComment} Comments</p>
          </div>
          {openCommentSec && (
            <div className={styles.parentComSec}>
              {comments.map((ele, indx) => (
                <div
                  key={indx}
                  className={
                    toggleTheme
                      ? `${styles.commentsByUser} ${styles.darkComment}`
                      : `${styles.commentsByUser}`
                  }
                >
                  <section>
                    <span>
                      <BsFillPersonFill className={styles.userLogo} />
                      user/
                      {Math.random().toString(36).substring(2, 7).toUpperCase()}
                    </span>
                    <main>
                      <p>{ele.createdAt.substring(0, 10)}</p>
                      <p>{ele.createdAt.substring(11, 19)}</p>
                    </main>
                  </section>
                  <p
                    className={
                      toggleTheme
                        ? `${styles.commentContent} ${styles.darkCommentContent}`
                        : `${styles.commentContent}`
                    }
                  >
                    {ele.content}
                  </p>
                </div>
              ))}
              <div className={styles.postComment}>
                <input
                  type="text"
                  placeholder="What are your thoughts?"
                  className={styles.textComment}
                  ref={inputRef}
                  // onBlur={() => }
                />
                <TfiArrowRight
                  className={styles.postBtn}
                  onClick={handlePostComment}
                />
              </div>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};
export default React.memo(PostInfoCard);
