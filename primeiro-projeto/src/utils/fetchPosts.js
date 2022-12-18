export const loadPosts = async () => {
  const postRes = fetch("https://jsonplaceholder.typicode.com/posts");
  const imageRes = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, image] = await Promise.all([postRes, imageRes]);

  const postsToJson = await posts.json();
  const imageToJson = await image.json();

  const postAndImage = postsToJson.map((post, index) => {
    return { ...post, cover: imageToJson[index].url };
  });

  return postAndImage;
};
