import CommunityList from "./CommunityList";
import SideBar from "./SideBar";
import Post from "./Post";
import styles from "./Home.module.css";
import { useState } from "react";
import { getToken } from "../../utils/config";

const Home = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Post />
      <CommunityList />
    </div>
  );
};
export default Home;
