import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RootLayout from "./components/layout/RootLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
<<<<<<< HEAD
import Profile from "./pages/Auth/Profile.jsx";
import Verify from "./pages/auth/Verify.jsx";
import { verify } from "./pages/auth/action/authAction.js";
import { AboutUs } from "./pages/Aboutus.jsx";
import EditProfile from "./pages/auth/EditProfile.jsx";
import ArticleDetail from "./pages/auth/ArticleDetail.jsx";

=======
import ProfileUser from "./pages/auth/Profile.jsx";
import Verifyotp from "./pages/auth/Verifyotp.jsx";
import Profile from "./pages/Auth/Profile.jsx";
>>>>>>> 3331b5ca0fb87bb85cda8901d6f46929c2855245
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
        element: <AboutUs />,
      },
      {
        path: "/editprofile",
        element: <EditProfile />,
      },
      {
        path: "/articledetail",
        element: <ArticleDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
<<<<<<< HEAD
    path: "/verify-email",
    element: <Verify />,
=======
    path: "/profile",
    element: <ProfileUser />,
>>>>>>> 3331b5ca0fb87bb85cda8901d6f46929c2855245
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
