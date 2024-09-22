import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const initialValues = {
    username: "",
    email: "",
    password: "Qwer1234@",
    confirmPassword: "Qwer1234@",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special case character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const register = async (userData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Registration failed");
      }

      return await response.json();
    } catch (error) {
      console.error("Registration error:", error);
      return { status: true, message: error.message || "Registration failed." };
    }
  };

  const handleRegister = async (values) => {
    console.log("Value in handle Register", values);
    const email = values.email;
    console.log("Email in handle register", email);

    const registerData = await register(values);

    if (registerData?.status) {
      toast.error(registerData.message);
    } else {
      toast.success(registerData.message);
      navigate("/verifyotp", { state: { email: email } });
    }
  };

  return (
    <section className="flex justify-center mt-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Values", values);
          handleRegister(values);
          resetForm();
        }}
      >
        <Form className="w-1/2 bg-slate-200 p-5 rounded-md">
          {/* Username */}
          <div className="mt-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <Field
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="username"
            />
          </div>
          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="email"
            />
          </div>
          {/* Password */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="********"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="password"
            />
          </div>
          {/* Confirm Password */}
          <div className="mt-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="********"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="confirmPassword"
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </section>
  );
}
