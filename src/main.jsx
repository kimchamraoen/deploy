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
<<<<<<< HEAD
import EditProfile from "./pages/auth/EditProfile.jsx";
import ArticleDetail from "./pages/auth/ArticleDetail.jsx";
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { AboutUs } from "./pages/Aboutus.jsx";
=======
import EditProfile from "./pages/auth/EditProfile.jsx"
>>>>>>> 651b86aa694cb6578053e653469d6ba2aa6dfcd0
=======
import ArticleDetail from "./pages/auth/ArticleDetail.jsx";
>>>>>>> d099251b71fa50257015a07c542b45b880a519d6
>>>>>>> 73f8f405469cf34117063c52dc2705759d4044d7

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
<<<<<<< HEAD

      // {
      //   path: "/editprofile",
      //   element: <EditProfile />,
      // },
      // {
      //   path: "/articledetail",
      //   element: <ArticleDetail />,
      // },
=======
      {
        path: "/profile",
        element: <Profile />,
      },
      {
<<<<<<< HEAD
        path: "/aboutus",
        element: <AboutUs/>
=======
        path: "/editprofile",
        element: <EditProfile />,
>>>>>>> 651b86aa694cb6578053e653469d6ba2aa6dfcd0
      },
>>>>>>> 73f8f405469cf34117063c52dc2705759d4044d7
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
<<<<<<< HEAD
    <ArticleDetail />
=======
<<<<<<< HEAD
    <AboutUs/>
=======
    <ArticleDetail/>
>>>>>>> d099251b71fa50257015a07c542b45b880a519d6
>>>>>>> 73f8f405469cf34117063c52dc2705759d4044d7
  </StrictMode>
);
