import React from 'react';
import { func, bool } from 'prop-types';

import styles from './style.module.css';

function Button({ handleClick, disabled }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.btn}
      disabled={disabled}
    >
      Load more
    </button>
  );
}

Button.defaultProps = {
  handleClick: () => {},
  disabled: true,
};

Button.propTypes = {
  handleClick: func,
  disabled: bool,
};

export default Button;
