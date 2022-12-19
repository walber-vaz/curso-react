import React from "react";

import "./styles.css";

const InputSearch = (props) => {
  const { searchValue, handleChange } = props;
  return (
    <div className="container-search">
      {!!searchValue && <h2>Search: {searchValue}</h2>}
      <input
        type="search"
        name="search"
        id="search"
        onChange={handleChange}
        value={searchValue}
        className="input-search"
        placeholder="Pesquise um post"
        autoComplete="true"
        lang="pt-BR"
        autoCorrect="true"
      />
    </div>
  );
};

export default InputSearch;
