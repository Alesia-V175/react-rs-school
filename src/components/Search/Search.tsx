import React from 'react';
import styles from './Search.module.scss';
import { KEY_LOCAL_STORAGE } from '../../constants/constants';

class Search extends React.Component {
  state = {
    search: '',
  };

  constructor(props: string) {
    super(props);
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }

  private static getSearchValue(): string {
    const searchValue = localStorage.getItem(KEY_LOCAL_STORAGE.search);

    if (searchValue) {
      return JSON.parse(searchValue);
    }

    return '';
  }

  private updateSearchValue(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      search: event.target.value,
    });

    localStorage.setItem(KEY_LOCAL_STORAGE.search, JSON.stringify(event.target.value));
  }

  componentDidMount() {
    this.setState({
      search: Search.getSearchValue(),
    });
  }

  componentWillUnmount() {
    if (this.state.search) {
      localStorage.setItem(KEY_LOCAL_STORAGE.search, JSON.stringify(this.state.search));
    }
  }

  render() {
    return (
      <>
        <div className={styles.search}>
          <input type="search"
                 placeholder="Search a photo"
                 className={styles.search__input}
                 value={this.state.search}
                 onChange={this.updateSearchValue}
          />
        </div>
      </>
    );
  }
}

export default Search;
