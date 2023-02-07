export async function fetchApi() {
  try {
    const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const imgRes = await fetch('https://jsonplaceholder.typicode.com/photos');

    const [post, photos] = await Promise.all([postRes, imgRes]);

    const postJson = await post.json();
    const photosJson = await photos.json();

    const postAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    return postAndPhotos;
  } catch (error) {
    console.error({ error: error.message });
  }
}
