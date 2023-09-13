import { useState, useContext } from "react";
import { CommunityListCtx } from "../../App";
import styles from "./Navigationbar.module.css";

const SearchInput = () => {
  const [searchCommunity, setSearchCommunity] = useState([]);
  const { setSearchCommunityList, searchCommunityList } =
    useContext(CommunityListCtx);

  // console.log(searchCommunity);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.noSubmit}
        type="search"
        placeholder="Search Reddit"
      />
    </div>
  );
};

export default SearchInput;
