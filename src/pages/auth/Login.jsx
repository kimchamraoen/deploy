import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../pages/auth/action/authAction";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = async (values) => {
    const loginRes = await login(values);
    if (loginRes.access) {
      toast.success("Login Successfully");
      navigate("/");
    } else if (loginRes.message) {
      toast.error(loginRes.message);
    }
  };
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Login
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            password: Yup.string()
              .matches(
                regex,
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
              )
              .required("Password is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            handleLogin(values);
            resetForm();
          }}
        >
          <Form>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
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

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
              />
              <ErrorMessage
                className="text-red-600 text-xs mt-1"
                component="div"
                name="password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-5 text-white bg-primary200 hover:bg-primary100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </Form>
        </Formik>
        <ToastContainer />
      </div>
    </section>
  );
}
