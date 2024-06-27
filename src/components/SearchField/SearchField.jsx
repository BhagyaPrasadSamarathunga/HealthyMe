import { useState } from "react";
import styles from "./SearchField.module.css";

const SearchField = ({ filterItems }) => {
  const [searchClasses, setSearchClasses] = useState([styles.search]);

  const handleOnChange = (event) => {
    filterItems(event.target.value);
  };

  const toggleMouseEnter = () => {
    if (searchClasses.includes(styles.mouseEnterBorder)) {
      setSearchClasses(
        searchClasses.filter((c) => c !== styles.mouseEnterBorder)
      );
      return;
    } else {
      setSearchClasses([...searchClasses, styles.mouseEnterBorder]);
    }
  };

  const toggleFocus = () => {
    if (searchClasses.includes(styles.focusedBorder)) {
      setSearchClasses(searchClasses.filter((c) => c !== styles.focusedBorder));
      return; 
    } else {
      setSearchClasses([...searchClasses, styles.focusedBorder]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={searchClasses.join(" ")}
        placeholder="Filter dishes..."
        type="text"
        onChange={handleOnChange}
        onMouseEnter={toggleMouseEnter}
        onMouseLeave={toggleMouseEnter}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
    </div>
  );
};

export default SearchField;
