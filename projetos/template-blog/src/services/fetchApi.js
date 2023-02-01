export async function fetchApi(setPost) {
  const postRes = fetch('https://jsonplaceholder.typicode.com/posts');
  const imgRes = fetch('https://jsonplaceholder.typicode.com/photos');

  const [post, photos] = await Promise.all([postRes, imgRes]);

  const postJson = await post.json();
  const photosJson = await photos.json();

  const postAndPhotos = postJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return setPost(postAndPhotos);
}
