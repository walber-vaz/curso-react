import React from 'react';

import './styles.css';

const ButtonMorePosts = (props) => {
  const { loadPosts, disabled } = props;
  return (
    <button
      disabled={disabled}
      className="btn-more"
      type="button"
      onClick={loadPosts}
    >
      Proximo
    </button>
  );
};

export default ButtonMorePosts;
