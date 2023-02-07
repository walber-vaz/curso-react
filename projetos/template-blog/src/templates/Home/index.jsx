import { useEffect, useState } from 'react';
import Button from '../../components/Button';

import PostCard from '../../components/PostCard';
import { fetchApi } from '../../services/fetchApi';

import styles from './style.module.css';

function Home() {
  const [post, setPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(6);

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

  const noMorePosts = page + postsPerPage >= allPosts.length;
  return (
    <section className={styles.container}>
      <div className={styles.posts}>
        {post.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <Button handleClick={handleClick} disabled={noMorePosts} />
    </section>
  );
}

export default Home;
