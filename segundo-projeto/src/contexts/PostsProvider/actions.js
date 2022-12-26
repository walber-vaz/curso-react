import * as types from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POST_LOADING });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();

  return () => dispatch({ type: types.POST_SUCCESS, payload: posts });
};
