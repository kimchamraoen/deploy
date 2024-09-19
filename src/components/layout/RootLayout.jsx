import React from "react";
import { NavbarComponent } from "./Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
