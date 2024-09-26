import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { login } from "../auth/action/authAction";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = async (values) => {
    try {
      const loginRes = await login(values);
      console.log("loginRes:", loginRes); // For debugging purposes

      if (loginRes.access) {
        toast.success("Login Successfully");
        // Delay navigation until the toast is displayed
        setTimeout(() => {
          navigate("/"); // Navigate to the home page after success
        }, 1000); // Add delay (optional), e.g., 1000ms
      } else if (loginRes.message) {
        toast.error(loginRes.message);
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r dark:bg-black">
      <div className="w-auto gap-8 flex p-8 rounded-lg shadow-lg">
        <div className="w-[500px]">
          <div className="w-[100%] flex justify-center">
            <img
              src="/assets/LogoFinal.png"
              className="w-[100px]"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome to Story Bridge
          </h1>
          <Formik
            initialValues={{
              username: "me",
              password: "QWER1234@q",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .matches(
                  /^[a-zA-Z0-9_]*$/,
                  "Username must contain only letters, numbers, and underscores"
                )
                .required("Username is required"),
              password: Yup.string()
                .matches(
                  regex,
                  "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
                )
                .required("Password is required"),
            })}
            onSubmit={(values, { resetForm }) => {
              handleLogin(values);
              resetForm();
              console.log("values", values);
            }}
          >
            <Form className="w-1/2 bg-slate-200 p-5 rounded-md">
              {/* username */}
              <div className="mt-5">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <Field
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="username"
                />
              </div>
              {/* password */}
              <div className="mt-5 relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="password"
                />
                <div
                  className="absolute right-3 top-9 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </Form>
          </Formik>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/assets/Sign up-bro.png"
            alt="Hero Image"
            className="max-h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
