const getAllPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=15",
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Fail to fetch posts");
  }
  const posts = await res.json();
  return posts;
};

export const PostService = {
  getAllPosts,
};
