import React from 'react';
import { string, func } from 'prop-types';

import styles from './style.module.css';

function InputSearch({ searchValue, handleChange }) {
  return (
    <input
      type="search"
      id="search"
      name="search"
      defaultValue={searchValue}
      onChange={handleChange}
      placeholder="Pesquise um post"
      className={styles.btnSearch}
    />
  );
}

InputSearch.defaultProps = {
  searchValue: '',
  handleChange: () => {},
};

InputSearch.propTypes = {
  searchValue: string,
  handleChange: func,
};

export default InputSearch;
