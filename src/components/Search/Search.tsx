import React, { useEffect, useRef, useState } from 'react';
import { KeyLocalStorage } from '../../constants/constants';
import styles from './Search.module.scss';

interface ISearch {
  searchCards: (str: string) => void;
}

const Search = ({ searchCards }: ISearch): JSX.Element => {
  const [searchValue, setSearchValue] = useState(() => {
    const savedSearchValue = localStorage.getItem(KeyLocalStorage.search);

    if (savedSearchValue) {
      return savedSearchValue;
    }

    return '';
  });

  const searchRef = useRef(searchValue);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    const savedSearchValue = localStorage.getItem(KeyLocalStorage.search);

    if (savedSearchValue) {
      setSearchValue(savedSearchValue);
    }

    return () => {
      localStorage.setItem(KeyLocalStorage.search, searchRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyEvent = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter') {
      searchCards(searchValue);
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder="Search a photo"
        className={styles.search__input}
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyEvent}
      />
    </div>
  );
};

export default Search;
