import PostCard from "@/components/Post/PostCard";
import { PostService } from "@/services/post.service";
import { IPost } from "@/types";
import React from "react";

const PostPage = async () => {
  const posts = await PostService.getAllPosts();

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts?.map((post: IPost) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default PostPage;
