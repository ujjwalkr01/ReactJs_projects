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

  const fetchPostData = async () => {
    try {
      const config = getHeaderWithProjectId();
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/reddit/post",
        config
      );
      // console.log(res.data.data[0]);
      const postData = res.data.data;
      setPostData(postData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const handleLogInModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className={styles.parentContainer}>
        <button onClick={handleLogInModal}>
          <div className={styles.createBtn}></div>
          <p>Create a post</p>
        </button>
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
                    <button>
                      <button
                        className={styles.upvote}
                        onClick={handleLogInModal}
                      >
                        <TbArrowBigUp />
                      </button>
                      <p>{el.likeCount}</p>
                      <button
                        className={styles.devote}
                        onClick={handleLogInModal}
                      >
                        <TbArrowBigDown />
                      </button>
                    </button>
                    <button
                      className={styles.comment}
                      onClick={handleLogInModal}
                    >
                      <button>
                        <BsChatLeft />
                      </button>
                      <p> {el.commentCount}</p>
                    </button>
                    <button className={styles.share} onClick={handleLogInModal}>
                      <button>
                        <BsUpload />
                      </button>
                      <p>Share</p>
                    </button>
                  </div>
                </li>
                <hr />
              </>
            ))}
          </ul>
        </div>
      </div>
      {/* {openLogInModal && <LogInModal />} */}
    </>
  );
};
export default Post;
