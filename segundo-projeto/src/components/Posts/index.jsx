import React, { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

function Posts() {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  console.log(postsState);

  console.log(isMounted.current);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) dispatch();
    });

    return () => {
      isMounted.current = false;
      console.log(isMounted.current);
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {postsState.loading && (
        <h2>
          <strong>Carregando posts...</strong>
        </h2>
      )}
      {postsState.posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}

export default Posts;
