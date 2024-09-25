import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaBookmark,
  FaRegBookmark,
  FaShare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BlogCard({
  thumbnail,
  title,
  content,
  username,
  updated_at,
  profileUrl,
}) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [bookmarks, setBookmarks] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shares, setShares] = useState(0);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    setShares((prev) => prev + 1);
    console.log(`Shared: ${title}`);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => {
      const newBookmarkState = !prev;
      setBookmarks((prev) => (newBookmarkState ? prev + 1 : prev - 1));
      console.log(`Bookmark: ${title}`);
      return newBookmarkState;
    });
  };

  return (
    <section className="p-4  dark:bg-black dark:text-white mx-auto w-[20rem]">
      <div className=" rounded-lg shadow-lg overflow-hidden w-auto border border-gray-200 transition-transform transform hover:scale-105">
        <Link
          to="/articledetail"
          state={{ thumbnail, title, content, username, updated_at }}
        >
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
          />
          <div className="flex items-center p-2">
            <img
              src={profileUrl}
              className="w-12 h-12 rounded-full object-cover"
              alt="Profile"
            />
            <div className="ml-3">
              <span className="font-semibold">{username}</span>
              <span className="text-gray-400 text-xs block">
                {new Date(updated_at).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h2>
            <p className="text-gray-700 text-sm mb-4 line-clamp-1">{content}</p>
          </div>
        </Link>
        <div className="flex justify-between p-4 text-md text-gray-600 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button onClick={handleLikeClick} className="flex items-center">
              {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </button>
            <span className="badge text-sm">{likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleBookmarkClick} className="flex items-center">
              {isBookmarked ? (
                <FaBookmark className="text-blue-500" />
              ) : (
                <FaRegBookmark />
              )}
            </button>
            <span className="badge text-sm">{bookmarks}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleShare} className="flex items-center">
              <FaShare />
            </button>
            <span className="badge text-sm">{shares}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
