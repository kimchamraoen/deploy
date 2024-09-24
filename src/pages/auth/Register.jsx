import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../pages/auth/action/authAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

// function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false);

  const navigate = useNavigate();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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

  const handleRegister = async (values) => {
    const registerData = await register(values);
    registerData?.status
      ? toast.error(registerData.message)
      : (toast.success(registerData.message),
        navigate("/verify-email", { state: { email: values.email } }));
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center">
          <img
            src="./public/assets/Sign up-bro.png"
            alt="Register"
            className="max-w-full h-auto object-contain"
            style={{ maxHeight: "90vh" }}
          />
        </div>
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Create an Account
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleRegister(values);
              resetForm();
            }}
          >
            <Form>
              {/* Username */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  className="text-red-600 text-xs mt-1"
                  component="div"
                  name="username"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="name@gmail.com"
                />
                <ErrorMessage
                  className="text-red-600 text-xs mt-1"
                  component="div"
                  name="email"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                />
                <ErrorMessage
                  className="text-red-600 text-xs mt-1"
                  component="div"
                  name="password"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                />
                <ErrorMessage
                  className="text-red-600 text-xs mt-1"
                  component="div"
                  name="confirmPassword"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-4 text-white bg-primary200 hover:bg-primary100   rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </Form>
          </Formik>
          <ToastContainer />
        </div>
      </div>
    </section>
  )
};
