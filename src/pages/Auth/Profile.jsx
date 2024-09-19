import React from "react";
import { useAuth } from "../../context/AuthContext"; // Import useAuth

const Profile = () => {
  const { user, logout } = useAuth(); // Get user and logout function

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
