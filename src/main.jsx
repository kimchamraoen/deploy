import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RootLayout from "./components/layout/RootLayout.jsx";
import Login from  "./pages/auth/Login.jsx"
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import Profile from "./pages/Auth/Profile.jsx";
import Verify from "./pages/auth/Verify.jsx";
import { verify } from "./pages/auth/action/authAction.js";
import { AboutUs } from "./pages/Aboutus.jsx";
// import EditProfile from "./pages/auth/EditProfile.jsx"
// import ArticleDetail from "./pages/auth/ArticleDetail.jsx";
import ProductDetail from "./pages/auth/ProductDetail.jsx";

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
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register", // Ensure this points to the correct component
    element: <Register />,
  },
  {
    path: "/forgotpassword", // Correct case for URL consistency
    element: <ForgotPassword />,
  },
  {
    path: "/verify-email",
    element: <Verify />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

