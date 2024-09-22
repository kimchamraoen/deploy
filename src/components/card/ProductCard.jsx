import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaBookmark,
  FaRegBookmark,
  FaShare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ image, title, description, id }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [bookmarks, setBookmarks] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shares, setShares] = useState(0); // State for share count

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };
  const handleShare = () => {
    setShares((prev) => (shares ? prev - 1 : prev + 1));
    console.log(`Shared: ${title}`);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => {
      const newBookmarkState = !prev;
      setBookmarks((prev) => (newBookmarkState ? prev + 1 : prev - 1));
      return newBookmarkState;
    });
  };

  return (
    <Link to={`/products/${id}`} className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Link to="/">
          <div className="bg-white  rounded-lg overflow-hidden w-80">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <img src="" alt="" className="rounded-full mr-2" />
                <div>
                  <p className="text-sm font-semibold">Natali Craig</p>
                  <p className="text-xs text-gray-500">14 Jan 2022</p>
                </div>
              </div>
              <h2 className="text-lg font-bold mb-2 line-clamp-1">{title}</h2>
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {description}
              </p>
              <div className="flex justify-between text-gray-600 text-sm">
                <span className="badge">
                  {likes} <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className="badge">
                  {bookmarks} <FontAwesomeIcon icon={faBookmark} />
                </span>
                <span className="badge">
                  {comments} <FontAwesomeIcon icon={faComment} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Link>
  );
}
