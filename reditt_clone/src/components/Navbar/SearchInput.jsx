import styles from "./Navigationbar.module.css";

const SearchInput = () => {
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
