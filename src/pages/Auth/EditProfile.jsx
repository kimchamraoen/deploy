// import React from 'react';

// const ProfileCard = () => {
//     return (

//         <div className="bg-white shadow-md rounded-lg p-6 w-80">
//             <div className="mb-4">
//                 <label className="block text-sm font-semibold text-gray-700">Full Name</label>
//                 <input
//                     type="text"
//                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                     placeholder="Paul Thomas"

//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-sm font-semibold text-gray-700">Designation</label>
//                 <input
//                     type="text"
//                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                     placeholder="Sr. Support Agent"

//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-sm font-semibold text-gray-700">Email</label>
//                 <input
//                     type="email"
//                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                     placeholder="paulaguillar1992@gmail.com"

//                 />
//             </div>

//         </div>
//     );

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProfileCard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "Paul Thomas",
    designation: "Sr. Support Agent",
    position: "Data Science",
    location: "Phnom Penh",
    phone: "(855) 97123456 / 12345678",
    email: "paulaguillar1992@gmail.com",
    ranking: "⭐️⭐️⭐️⭐️",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/profile", { state: { profile: formData } });
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-md mx-auto mt-24 p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Profile Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Full Name", name: "fullName" },
          { label: "Designation", name: "designation" },
          { label: "Position", name: "position" },
          { label: "Location", name: "location" },
          { label: "Phone", name: "phone" },
          { label: "Email", name: "email", type: "email" },
          { label: "Ranking", name: "ranking" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-semibold text-gray-700">
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder={formData[name]}
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileCard;
