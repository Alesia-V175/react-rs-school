import React, { useEffect, useState } from 'react';
import { KeyLocalStorage } from '../../constants/constants';
import styles from './Search.module.scss';

const Search = ():JSX.Element => {
  const [searchValue, setSearchValue] = useState(() => {
    const savedSearchValue = localStorage.getItem(KeyLocalStorage.search);

    if (savedSearchValue) {
      return JSON.parse(savedSearchValue);
    }

    return '';
  });

  useEffect(() => {
    localStorage.setItem(KeyLocalStorage.search, JSON.stringify(searchValue));
  }, [searchValue]);

  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder="Search a photo"
        className={styles.search__input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Search;
