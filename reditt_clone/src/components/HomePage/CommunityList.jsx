import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { getHeaderWithProjectId } from "../../utils/config";
import styles from "./CommunityList.module.css";
import { CommunityListCtx } from "../../App";

const CommunityList = () => {
  const [CommunityList, setCommunityList] = useState([]);
  const {setSearchCommunityList, searchCommunityList}=useContext(CommunityListCtx);

  const fetchingPost = async () => {
    const config = getHeaderWithProjectId();
    try {
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/reddit/channel",
        config
      );
      const communityData = res.data.data;
      // console.log(res.data.data);
      setCommunityList(communityData);
      setSearchCommunityList(communityData);
      console.log(searchCommunityList)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchingPost();
  }, []);

  return (
    <div className={styles.parentContainer}>
      <h4 style={{ fontWeight: "500" }}>POPULAR COMMUNITIES</h4>
      <ul>
        {CommunityList.map((el) => (
          <li className={styles.listCont} key={el._id}>
            <div style={{ backgroundImage: `url(${el.image})` }}></div>
            <p>
              r/{el.name}
              <span>
                {parseFloat(
                  Math.floor(Math.random() * (10000000 - 100000 + 1)) + 100000
                ).toLocaleString()}
                &nbsp;members
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(CommunityList);
