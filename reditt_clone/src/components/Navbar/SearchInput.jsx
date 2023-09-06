import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <input className={styles.noSubmit} type="search" placeholder="Search Reddit" />
    </div>
  );
};

export default SearchInput;
