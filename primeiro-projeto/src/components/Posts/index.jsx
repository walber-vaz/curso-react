import { array } from 'prop-types';
import React from 'react';
import PostCard from '../PostCard';

import './styles.css';

const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: array.isRequired,
};

export default Posts;
