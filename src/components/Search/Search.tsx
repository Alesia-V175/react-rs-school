import React from 'react';
import { KeyLocalStorage } from '../../constants/constants';
import styles from './Search.module.scss';

class Search extends React.Component {
  state = {
    search: '',
  };

  private static getSearchValue(): string {
    const searchValue = localStorage.getItem(KeyLocalStorage.search);

    if (searchValue) {
      return JSON.parse(searchValue);
    }

    return '';
  }

  private updateSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
    });

    localStorage.setItem(KeyLocalStorage.search, JSON.stringify(event.target.value));
  };

  componentDidMount() {
    this.setState({
      search: Search.getSearchValue(),
    });
  }

  componentWillUnmount() {
    if (this.state.search) {
      localStorage.setItem(KeyLocalStorage.search, JSON.stringify(this.state.search));
    }
  }

  render() {
    return (
      <div className={styles.search}>
        <input
          type="search"
          placeholder="Search a photo"
          className={styles.search__input}
          value={this.state.search}
          onChange={this.updateSearchValue}
        />
      </div>
    );
  }
}

export default Search;
