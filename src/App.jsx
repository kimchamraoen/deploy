import React, { useEffect, useState } from "react";
import BlogCard from "./components/card/BlogCart.jsx";
import ProfileCard from "./pages/auth/EditProfile";
import { Link } from "react-router-dom";
import BlogList from "./lib/BlogeList.jsx";
function App() {
  return (
    <>
      <div>
        <div className="bg-blue-950 w-[100%]  flex justify-between wrap ">
          <div className="flex image">
            <div className="my-auto ml-[20rem]">
              <div className="flex font-bold space-x-2 ">
                <h1 className="text-white text-lg ">Welcome to </h1>
                <h1 className="text-amber-400 text-lg "> STORY BRIDGE</h1>
              </div>
              <p className="text-white text-sm my-5">
                A knowledge-sharing platform that allows users to create, share,
                and explore insightful articles across various topics.
              </p>
              <Link
                to="/aboutus"
                className="text-white border-2 p-2 text-base hover:bg-white hover:text-blue-950"
              >
                About Us
              </Link>
            </div>
          </div>

          <img
            src="./public/assets/News-cuate.png"
            alt="block"
            className="max-h-72 object-cover rounded-xl mr-5"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 mx-auto mt-10"></div>
      </div>
      <section className="mx-28">
        <BlogList />
      </section>
    </>
  );
}
export default App;
