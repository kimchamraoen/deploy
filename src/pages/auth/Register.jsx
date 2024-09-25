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
    username: "",
    email: "",
    password: "Ifmesayyes123@Ifmesayes123@",
    confirmPassword: "Ifmesayyes123@Ifmesayes123@",
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
    console.log("value in handle Register", values);
    const email = values.email;
    console.log("email in handle register", email);
    const registerData = await register(values);
    registerData?.status
      ? toast.error(registerData.message)
      : // navigate("/verify-email", { state: { email: email } }))
        (toast.success(registerData.message),
        navigate("/", { state: { email: email } }));
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r dark:bg-black">
      <div className="w-auto gap-8 flex p-8  rounded-lg shadow-lg">
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
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Form Fields */}
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
