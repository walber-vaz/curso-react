import { useEffect, useState } from 'react';

import styles from './App.module.css';
import PostCard from './components/PostCard';
import { fetchApi } from './services/fetchApi';

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchApi().then(res => setPost(res));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.posts}>
        {post.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}

export default App;
