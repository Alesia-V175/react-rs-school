import React, { useEffect, useRef, useState } from 'react';
import { KeyLocalStorage } from '../../constants/constants';
import styles from './Search.module.scss';

const Search = (): JSX.Element => {
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

  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder="Search a photo"
        className={styles.search__input}
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
