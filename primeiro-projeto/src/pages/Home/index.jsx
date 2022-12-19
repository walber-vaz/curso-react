import { useState, useEffect, useCallback } from 'react';

import Posts from '../../components/Posts';
import NotPost from '../../components/NotPost';
import InputSearch from '../../components/InputSearch';
import ButtonMorePosts from '../../components/ButtonMorePosts';

import { loadPosts } from '../../utils/fetchPosts';
import './styles.css';

/* Componente funcional */
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState('');

  const fetchPost = useCallback(async (page, postsPerPage) => {
    const postAndImage = await loadPosts();

    setPosts(postAndImage.slice(page, postsPerPage));
    setAllPosts(postAndImage);
  }, []);

  useEffect(() => {
    fetchPost(0, postsPerPage);
  }, [fetchPost, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filterPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;
  return (
    <section className="container">
      <InputSearch searchValue={searchValue} handleChange={handleChange} />

      {filterPosts.length > 0 ? <Posts posts={filterPosts} /> : <NotPost />}
      <div className="btn-container">
        {!searchValue && (
          <ButtonMorePosts loadPosts={loadMorePosts} disabled={noMorePosts} />
        )}
      </div>
    </section>
  );
};

export default Home;
