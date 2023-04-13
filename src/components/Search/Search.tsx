import React, {
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { KeyLocalStorage } from '../../constants/constants';
import styles from './Search.module.scss';

interface ISearch {
  searchCards: (str: string) => void;
}

const Search = ({ searchCards }: ISearch): JSX.Element => {
  const [searchValue, setSearchValue] = useState(() => localStorage.getItem(KeyLocalStorage.search) ?? '');

  const searchRef = useRef(searchValue);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    const savedSearchValue = localStorage.getItem(KeyLocalStorage.search) ?? '';

    setSearchValue(savedSearchValue);

    return () => {
      localStorage.setItem(KeyLocalStorage.search, searchRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    searchCards(searchValue);
    localStorage.setItem(KeyLocalStorage.search, searchValue);
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
