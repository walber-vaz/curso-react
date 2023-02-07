/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchApi();
      setPost(posts.slice(page, postsPerPage));
      setAllPosts(posts);
    }
    getPosts();
  }, []);

  const handleClick = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    post.push(...nextPosts);
    setPost(post);
    setPage(nextPage);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);

    if (value.length > 0) {
      const filteredPosts = allPosts.filter(post => {
        return post.title.toLowerCase().includes(value.toLowerCase());
      });
      setPost(filteredPosts);
    }

    if (value.length === 0) {
      setPost(allPosts.slice(page, postsPerPage));
    }
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  return (
    <section className={styles.container} onChange={handleChange}>
      {!!searchValue && (
        <>
          <h1>Search value: {searchValue}</h1>
        </>
      )}
      {/* Imprimir na tela uma mensagem se não encontra nenhum post na pesquisa */}
      {post.length === 0 && <p>Não existem posts com o valor pesquisado</p>}
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
