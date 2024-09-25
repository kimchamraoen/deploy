import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArticleCard } from "../../components/card/UserBlogCard";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Correctly defined here
  const { username, bio, profileUrl } = location.state || {};

  return (
    <main className="mt-16">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg mx-auto shadow-lg">
          <div className="flex items-center">
            <div className="flex w-full items-start p-5 bg-white shadow-md rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 rounded-full border-4"
                  src={profileUrl} // Use the profileUrl from state
                  alt="Profile"
                />
                <button
                  onClick={() => navigate("/editprofile")}
                  className="text-blue-600 mt-2 hover:underline"
                >
                  Edit Profile
                </button>
              </div>
              <div className="ml-14 p-2">
                <h1 className="text-2xl font-bold text-gray-800">
                  Name: {username}
                </h1>{" "}
                {/* Display user's name */}
                <p className="text-sm text-gray-600">{bio}</p>{" "}
                {/* Display user's bio */}
              </div>
            </div>
          </div>
          {/* Additional Content Here */}
        </div>
      </div>
    </main>
  )};

export default Profile;
