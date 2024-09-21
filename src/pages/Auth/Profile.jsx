import React from "react";
import { ArticleCard } from "../../components/card/UserBlogCard";

const ProfilePage = () => {
  return (
    <main className="mt-16">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg  mx-auto">
          {/* Profile Information */}
          <div className="flex items-center  mb-8">
            <div className="flex justify-between">
              {/* Profile Picture */}
              <div className="w-100 h-40 rounded-full overflow-hidden ml-[100px] mt-2">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Profile Text */}
              <div className="ml-[110px] p-2">
                <h1 className="text-xl font-bold">Heesoung Heng</h1>
                <p className="text-sm text-gray-600">
                  Senior Data Scientist | AI Writer Top writer in Artificial
                  Intelligence
                </p>
                <p className="text-gray-600">Position: Data Science</p>
                <p className="text-gray-600">Ranking: ⭐⭐⭐⭐</p>
                <p className="text-gray-600">Location: Phnom Penh</p>
                <p className="text-gray-600">
                  Phone: (855) 97123456 / 12345678
                </p>
                <p className="text-gray-600">Email: storybridge@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Written By Section */}
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Article Card Component

export default ProfilePage;
