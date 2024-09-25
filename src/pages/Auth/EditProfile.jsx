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
    <div className="bg-white shadow-md rounded-lg p-6 w-80">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Paul Thomas"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Designation
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Sr. Support Agent"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="paulaguillar1992@gmail.com"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
