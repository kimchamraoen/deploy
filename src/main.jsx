import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RootLayout from "./components/layout/RootLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx"; // Fixed typo here
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import Verifyotp from "./pages/auth/Verifyotp.jsx";
import Profile from "./pages/Auth/Profile.jsx";
import { AboutUs } from "./pages/Aboutus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register", // Fixed typo here as well
    element: <Register />,
  },
  {
    path: "/forgotpassword", // Changed to lowercase for URL consistency
    element: <ForgotPassword />,
  },
  {
    path: "/verifyotp",
    element: <Verifyotp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
