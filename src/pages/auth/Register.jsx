import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../pages/auth/action/authAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa"; // Corrected import

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  // Regex for password validation
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Initial form values
  const initialValues = {
    username: "", // Fixed duplicate key issue
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Handle form submission
  const handleRegister = async (values) => {
    try {
      const registerData = await register(values);
      if (registerData?.status) {
        toast.error(registerData.message);
      } else {
        toast.success(registerData.message);
        setRegistered(true); // Set registered to true on success
        navigate("/", { state: { email: values.email } });
      }
    } catch (error) {
      toast.error("Registration failed, please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r dark:bg-black">
      <div className="w-auto gap-8 flex p-8 rounded-lg shadow-lg">
        <div>
          <img
            src="./public/assets/Social ideas-cuate.png"
            alt="Hero Image"
            className="max-h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-[500px]">
          <div className="w-[100%] flex justify-center">
            <img
              src="./public/assets/LogoFinal.png"
              className="w-[100px]"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome to Story Bridge <br /> Create an Account
          </h1>
          {!registered ? (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Username field */}
                  <div className="relative">
                    <Field
                      type="text"
                      name="username" // Corrected the field name to 'username'
                      placeholder="User Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Password field */}
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 mr-3 mt-3 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>

                  {/* Confirm Password field */}
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 mr-3 mt-3 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    {isSubmitting ? "Loading..." : "Sign Up"}
                  </button>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Registration Successful!
              </h2>
              <p className="mb-4">
                Thank you for signing up. You can now log in.
              </p>
              <Link to="/" className="text-blue-600 hover:underline">
                Go to Home
              </Link>
            </div>
          )}
          <div className="mt-6 text-center">
            <p className="text-gray-600">Already have an account?</p>
            <Link to="/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
