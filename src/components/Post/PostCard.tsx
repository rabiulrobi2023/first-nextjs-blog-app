import { IPost } from "@/types";
import React from "react";

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div className="shadow-xl rounded-xl p-5">
      <p>Post Id: {post.id} </p>
      <p>Title: {post.title}</p>
      <p>Boddy: {post.body}</p>
    </div>
  );
};

export default PostCard;
