import React, {
  FormEventHandler,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useActions from '../../redux/hooks/useActions';
import styles from './Search.module.scss';

const Search = (): JSX.Element => {
  const { changeSearch } = useActions();
  const stateSearch = useSelector<RootState, string>((state) => state.search.stateSearch);
  const [searchValue, setSearchValue] = useState(stateSearch);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    changeSearch(searchValue);
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search a photo"
          className={styles.search__input}
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
