/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button';
import InputSearch from '../../components/InputSearch';

import PostCard from '../../components/PostCard';
import { fetchApi } from '../../services/fetchApi';

import styles from './style.module.css';

function Home() {
  const [post, setPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPost = useCallback(async (page, postsPerPage) => {
    const posts = await fetchApi();
    setPost(posts.slice(page, postsPerPage));
    setAllPosts(posts);
  }, []);

  useEffect(() => {
    handleLoadPost(0, postsPerPage);
  }, [handleLoadPost, postsPerPage]);

  const handleClick = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    post.push(...nextPosts);
    setPost(post);
    setPage(nextPage);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const fitleredPosts = searchValue
    ? allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : post;

  return (
    <section className={styles.container} onChange={handleChange}>
      {!!searchValue && (
        <>
          <h1>Search value: {searchValue}</h1>
        </>
      )}
      {fitleredPosts.length === 0 && (
        <p>Não existem posts com o valor pesquisado</p>
      )}
      <InputSearch searchValue={searchValue} handleChange={handleChange} />
      <div className={styles.posts}>
        {post.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      {!searchValue && (
        <Button handleClick={handleClick} disabled={noMorePosts} />
      )}
    </section>
  );
}

export default Home;
