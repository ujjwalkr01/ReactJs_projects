import React from "react";
import { getAuthHeaderConfig } from "../../utils/config";
import axios from "axios";

const ProfilePage = () => {
  const fetchingUpvotePost = async () => {
    try {
      const configs = getAuthHeaderConfig();
      console.log(configs);
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/reddit/like/64e6003942b72201a6bcf754",
        configs
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const handleupvote = () => {
    fetchingUpvotePost();
  };

  return (
    <div>
      <p onClick={handleupvote}>This is Profile Page</p>
    </div>
  );
};
export default ProfilePage;
