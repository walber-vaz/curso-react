import { useEffect, useState } from 'react';

import styles from './App.module.css';

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const postRes = fetch('https://jsonplaceholder.typicode.com/posts');
    const imgRes = fetch('https://jsonplaceholder.typicode.com/photos');

    const [post, photos] = await Promise.all([postRes, imgRes]);

    const postJson = await post.json();
    const photosJson = await photos.json();

    const postAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    setPost(postAndPhotos);
  }

  return (
    <section className={styles.container}>
      <div className={styles.posts}>
        {post.map(post => (
          <div key={post.id} className={styles.post}>
            <img src={post.cover} alt={post.title} />
            <div className={styles.postContent}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
