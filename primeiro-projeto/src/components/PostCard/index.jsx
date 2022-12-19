import React from 'react';

import './styles.css';

const PostCard = ({ post: { title, cover, body } }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <article className="post-card">
        <h2>{title}</h2>
        <p>{body}</p>
      </article>
    </div>
  );
};

export default PostCard;
