import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const verifyOTP = () => {
    const location = useLocation();
    if (otp === "123456") {
      setMessage("OTP verified successfully!");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Verify Your OTP
        </h1>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          maxLength="6"
          className="w-full p-2 border border-blue-500 rounded mb-4"
        />
        <button
          onClick={verifyOTP}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
        {message && (
          <div
            className={`mt-4 text-center ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
