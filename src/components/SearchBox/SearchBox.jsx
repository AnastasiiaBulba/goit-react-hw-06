import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  // Отримуємо значення фільтра
  const filter = useSelector(selectNameFilter);

  const handleInputChange = (event) => {
    // Відправляємо значення в Redux
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        // Значення з Redux
        value={filter}
        onChange={handleInputChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
