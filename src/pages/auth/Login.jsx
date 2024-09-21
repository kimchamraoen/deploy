import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform login logic here
    console.log("Values:", values);
    setSubmitting(false);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r">
      <div className="w-auto gap-8 flex p-8 bg-white rounded-lg shadow-lg ">
        <div className="w-[500px] ">
          <div className="w-[100%] flex justify-center">
            <img
              src="./src/assets/LogoFinal.png"
              className="w-[100px] "
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome to Story Bridge
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-primary100 text-white font-semibold rounded-md hover:bg-primary100 transition duration-200"
                >
                  {isSubmitting ? "Loading..." : "Login"}
                </button>
                <div className="flex items-center justify-between mt-4">
                  <label className="flex items-center">
                    <Field type="checkbox" name="rememberMe" className="mr-2" />
                    Remember Me
                  </label>
                  <Link
                    to="/ForgotPassword"
                    className="text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </Form>
            )}
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
            src="./src/assets/Sign up-bro.png"
            alt="Hero Image"
            className=" max-h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
