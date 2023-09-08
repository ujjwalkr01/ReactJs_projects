import axios from "axios";
import { getHeaderWithProjectId } from "../../utils/config";
import { useEffect, useState } from "react";
import styles from "./Post.module.css";

const Post = () => {
  const [postDataList, setPostData] = useState([]);

  const fetchPostData = async () => {
    try {
      const config = getHeaderWithProjectId();
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/reddit/post",
        config
      );
      console.log(res.data.data[0]);
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
    <div className={styles.parentContainer}>
      <button>create a post!</button>
      <div>
        <ul>
          {postDataList.map((el) => (
            <>
              <li className={styles.listCont} key={el._id}>
                <div className={styles.channelDetails}>
                  <div
                    className={styles.profileImg}
                    style={{ backgroundImage: `url(${el.channel.image})` }}
                  ></div>
                  <p>r/{el.channel.name}</p>
                </div>
                <div className={styles.contents}>{el.content}</div>
                <div className={styles.like_commBtn}>
                  <button>Like:{el.likeCount}</button>
                  <button>Comment:{el.commentCount}</button>
                </div>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Post;
