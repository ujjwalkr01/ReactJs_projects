import React, { createContext, useContext, useState } from "react";

const PostInfoContext = createContext();


export const PostInfoProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState({});
  const [selectCommunityName, setSelectedCommunityName] = useState([]);
  return (
    <PostInfoContext.Provider
      value={{
        selectedPost,
        setSelectedPost,
        selectCommunityName,
        setSelectedCommunityName,
      }}
    >
      {children}
    </PostInfoContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostInfoContext);
};
