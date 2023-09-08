import CommunityList from "./CommunityList";
import SideBar from "./SideBar";
import Post from "./Post";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <SideBar /> */}
      <Post />
      <CommunityList />
    </div>
  );
};
export default Home;
