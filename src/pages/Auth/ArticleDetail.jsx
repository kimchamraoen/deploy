import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export default function ArticleDetail({ thumbnail, title, description }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(30);
  const [isLiked, setIsLiked] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(30);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => {
      if (!prev) {
        setBookmarkCount(bookmarkCount + 1);
      } else {
        setBookmarkCount(bookmarkCount - 1);
      }
      return !prev;
    });
  };
  const handleLikeClick = () => {
    setIsLiked((prev) => {
      if (prev) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      return !prev;
    });
  };

  return (
    <div className="container">
      <div className="flex items-center">
        <img
          src=""
          alt="User Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">Michael Alford</h2>
          <p className="text-gray-500">
            Published in Live View • 12 min read • Mar 5, 2024
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-8 mb-4">{title}</h1>
      <p className="text-gray-500 mb-8">
        Michael Alford • September 11, 2024 • 132 views
      </p>

      <img
        src={thumbnail}
        alt="Beautiful landscape"
        className="w-[13rem] h-auto mb-8"
      />

      <div className="prose max-w-none">
        <p className="text-[16px]">{description}</p>
      </div>

      <div className="flex w-[120px] m-8 justify-between">
        <button
          onClick={handleLikeClick}
          className="text-[24px] flex items-center transition-transform duration-200 hover:scale-110"
        >
          {isLiked ? (
            <FaHeart className="mr-4" />
          ) : (
            <FaRegHeart className="mr-4" />
          )}
          <span className="text-[16px]">{likes}</span>
        </button>
        <button
          onClick={handleBookmarkClick}
          className="text-[24px] flex items-center transition-transform duration-200 hover:scale-110"
        >
          {isBookmarked ? (
            <IoMdBookmark className="mr-2" />
          ) : (
            <CiBookmark className="mr-2 text-gray-500" />
          )}
          <span className="text-[16px]">{bookmarkCount}</span>{" "}
        </button>
      </div>
    </div>
  );
}
