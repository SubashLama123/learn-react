import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../posts/postSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div className="text-center mt-10">Loading...</div>;
  if (status === "failed") return <div className="text-red-500 mt-10">{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
