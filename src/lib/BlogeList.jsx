import React from "react";
import BlogCard from "../../components/card/BlogCard";
export default function BlogList({ bloge }) {
  return (
    <div className="flex flex-wrap">
      {bloge.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          thumbnail={blog.thumbnail}
          content={blog.content}
          username={blog.author.username}
          profileUrl={blog.author.profileUrl}
        />
      ))}
    </div>
  );
}
