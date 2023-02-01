import React from 'react';
import { string } from 'prop-types';

import styles from './PostCard.module.css';

function PostCard({ title, body, cover }) {
  return (
    <div className={styles.post}>
      <img src={cover} alt={title} />
      <div className={styles.postContent}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: string.isRequired,
  body: string.isRequired,
  cover: string.isRequired,
};

export default PostCard;
