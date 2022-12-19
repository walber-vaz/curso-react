import React from 'react';
import { func, bool } from 'prop-types';

import './styles.css';

const ButtonMorePosts = ({ loadPosts, disabled }) => {
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

ButtonMorePosts.defaultProps = {
  disabled: false,
};

ButtonMorePosts.propTypes = {
  loadPosts: func.isRequired,
  disabled: bool,
};

export default ButtonMorePosts;
