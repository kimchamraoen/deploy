import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false); // Track registration status

  const getExistingEmails = () => {
    const emails = localStorage.getItem("emails");
    return emails ? JSON.parse(emails) : [];
  };

  const loadFormData = () => {
    const formData = localStorage.getItem("formData");
    return formData
      ? JSON.parse(formData)
      : { name: "", email: "", password: "" };
  };

  const initialValues = loadFormData();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const existingEmails = getExistingEmails();
    if (existingEmails.includes(values.email)) {
      toast.error("This email already exists. Please use a different email.");
      setSubmitting(false);
      return;
    }

    try {
      setSubmitting(true);
      existingEmails.push(values.email);
      localStorage.setItem("emails", JSON.stringify(existingEmails));
      localStorage.setItem("formData", JSON.stringify(values));

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Registration successful!");
      resetForm();
      setRegistered(true); // Set registration status to true
    } catch (error) {
      toast.error("An error occurred during registration.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r">
      <div className="w-auto gap-8 flex p-8 bg-white rounded-lg shadow-lg ">
        <div>
          <img
            src="./src/assets/Sign up-bro.png"
            alt="Hero Image"
            className="max-h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-[500px] ">
          <div className="w-[100%] flex justify-center">
            <img
              src="./src/assets/LogoFinal.png"
              className="w-[100px]"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome to Story Bridge <br /> Create an Account
          </h1>
          {!registered ? ( // Conditional rendering based on registration status
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="relative">
                    <Field
                      type="text"
                      name="name"
                      placeholder="User Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
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
                      {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Comfime Password"
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
                      {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                  </div>
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
              <Link to="/login" className="text-blue-600 hover:underline">
                Go to Login
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
export default Register;
