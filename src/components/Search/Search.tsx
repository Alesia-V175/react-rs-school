import React from 'react';
import styles from './Search.module.scss';

class Search extends React.Component {
  state = {
    search: '',
  };

  constructor(props: string) {
    super(props);
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }

  private static getSearchValue(): string {
    const searchValue = localStorage.getItem('search');

    if (searchValue) {
      return JSON.parse(searchValue);
    }

    return '';
  }

  private updateSearchValue(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      search: event.target.value,
    });

    localStorage.setItem('search', JSON.stringify(event.target.value));
  }

  componentDidMount() {
    this.setState({
      search: Search.getSearchValue(),
    });
  }

  render() {
    return (
      <>
        <div className={styles.search}>
          <input type="search"
                 placeholder="Search a photo"
                 className={styles.search__input}
                 value={this.state.search}
                 onChange={(e) => this.updateSearchValue(e)}
          />
        </div>
      </>
    );
  }
}

export default Search;
