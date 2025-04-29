const getPost = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const result = await response.json();
  return result;
};

const getSinglePost = async (id) => {
  const response = await fetch(`https://dummyjson.com/posts1/${id}`);
  const result = await response.json();
  return result;
};

const getPostTags = async () => {
  const response = await fetch("https://dummyjson.com/posts/tags");
  const result = await response.json();
  return result;
};

const getPostByTags = async (tag) => {
  const response = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
  const result = await response.json();
  return result;
};

export { getPost, getSinglePost, getPostTags, getPostByTags };
