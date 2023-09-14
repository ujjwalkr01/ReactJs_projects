import React from "react";
import { getAuthHeaderConfig } from "../../utils/config";
import axios from "axios";


const Comments = (props) => {

  const configs = getAuthHeaderConfig();
  // const { postId } = props;
  // console.log(props.authorName);

  // const fetchingCommentsPost = async (postId) => {
  //   try {
  //     const res = await axios.get(
  //       `https://academics.newtonschool.co/api/v1/reddit/post/${postId}/comments`,
  //       configs,
  //       postId
  //     );
  //     console.log(res);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleupvote = () => {
  //   console.log(postId);
  //   fetchingCommentsPost(postId);
  // };

  return (
    <div>
      <p>This is Profile Page</p>
      <p>This is Profile Page</p>
     
    </div>
  );
};
export default Comments;
