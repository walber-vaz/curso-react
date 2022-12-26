import { useReducer } from 'react';
import { PostsContext } from './context';
import { node } from 'prop-types';
import { reducer } from './reducer';
import { data } from './data';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: node.isRequired,
};
