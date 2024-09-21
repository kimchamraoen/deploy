import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faEnvelope, faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ image, title, description, likes = 0, comments = 0, bookmarks = 0 }) {
  
  return (
    
    <main className="max-w-screen-2xl mx-auto px-10 mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="bg-white  rounded-lg overflow-hidden w-80">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
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
      </div>
    </main>
  );
}
