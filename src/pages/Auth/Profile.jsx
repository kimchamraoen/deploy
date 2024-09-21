import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArticleCard } from "../../components/card/UserBlogCard"; // Replace with your actual ArticleCard import

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate here

  const profile = location.state?.profile || {
    fullName: "Paul Thomas",
    designation: "Sr. Support Agent",
    position: "Data Science",
    location: "Phnom Penh",
    phone: "(855) 97123456 / 12345678",
    email: "paulaguillar1992@gmail.com",
    ranking: "⭐️⭐️⭐️⭐️",
  };

  return (
    <main className="mt-16">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg mx-auto">
          <div className="flex items-center">
            <div className="flex w-full justify-evenly items-start p-5 bg-white shadow-md rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full overflow-hidden"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
                <button
                  onClick={() => navigate("/editprofile")}
                  className="text-blue-600 flex items-center mt-2"
                >
                  Edit Profile
                </button>
              </div>
              <div className="ml-6 p-2">
                <h1 className="text-2xl font-bold text-gray-800">
                  {profile.fullName}
                </h1>
                <p className="text-sm text-gray-600">{profile.designation}</p>
                <p className="text-gray-700">Position: {profile.position}</p>
                <p className="text-gray-700">Ranking: {profile.ranking}</p>
                <p className="text-gray-700">Location: {profile.location}</p>
                <p className="text-gray-700">Phone: {profile.phone}</p>
                <p className="text-gray-700">Email: {profile.email}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 m-4 ">All post</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Article Card */}
              <ArticleCard
                author="Natal Craig"
                date="14 Jan 2022"
                title="How collaboration makes us better designers"
                description="Collaboration can make our teams stronger and our individual designs better."
                image="https://via.placeholder.com/300"
              />
              <h2 className="text-2xl font-bold mb-2 m-4">
                Written by {profile.fullName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Example Article Card */}
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <ArticleCard
                      key={index}
                      author="Natal Craig"
                      date="14 Jan 2022"
                      title="How collaboration makes us better designers"
                      description="Collaboration can make our teams stronger and our individual designs better."
                      image="https://via.placeholder.com/300"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
