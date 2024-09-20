// components/blog/BlogPost.js
import React from "react";

const BlogPost = ({
  title,
  content,
  author,
  categories,
  number_of_likes,
  number_of_bookmarks,
}) => {
  return (
    <div className="blog-post border rounded p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
      <div className="author-info mt-2">
        <p>
          <strong>Author:</strong> {author.username} ({author.bio})
        </p>
      </div>
      <div className="categories mt-2">
        {categories.map((category) => (
          <span
            key={category.id}
            className="category bg-gray-200 rounded px-2 py-1 mr-2"
          >
            {category.name}
          </span>
        ))}
      </div>
      <div className="stats mt-2">
        <p>Likes: {number_of_likes}</p>
        <p>Bookmarks: {number_of_bookmarks}</p>
      </div>
    </div>
  );
};

export default BlogPost;
