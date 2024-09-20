import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RootLayout from "./components/layout/RootLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx"; // Fixed typo here
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
<<<<<<< HEAD
import ProfileUser from "./pages/auth/Profile.jsx";
=======
import Verifyotp from "./pages/auth/Verifyotp.jsx";
import Profile from "./pages/Auth/Profile.jsx";
>>>>>>> 6a7ade2250f3f95ed562f7232a05f8ca7e4de865

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
    path: "/profile",
    element: <ProfileUser />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
