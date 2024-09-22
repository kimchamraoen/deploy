import React, { useEffect, useState } from "react";
import { NavbarComponent } from "./components/layout/Navbar";
import { Footercomponent } from "./components/layout/Footer";
import ProductCard from "./components/card/ProductCard";
// import { getAllProducts } from "./service/product/productAction";
import getAllbloge from "./service/blogs/BlogeAction.js";
import ProfileCard from "./pages/auth/EditProfile";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";
function App() {
  const [bloge, setbloge] = useState([]);
  useEffect(() => {
    async function fetchllbloge() {
      const bloges = await getAllbloge();
      console.log("bloges", bloges);
      setbloge(bloges);
    }
    fetchllbloge();
  }, []);
  return (
    <>
      {/* <NavbarComponent /> */}
      {/* <NewPassword/> */}
      {/* <ProfileCard /> */}
      <div>
        <div className="bg-blue-950 w-full mt-[4.3rem] flex justify-between wrap">
          <div className="ml-5 mt-3">
            <div className="flex font-bold space-x-2 ">
              <h1 className="text-white text-lg ">Welcome to </h1>
              <h1 className="text-amber-400 text-lg "> STORY BRIDGE</h1>
            </div>
            <p className="text-white text-sm my-3">
              A knowledge-sharing platform that allows users to create, share,
              and explore insightful articles across various topics.
            </p>
            <Link to="/aboutus" className="text-white border-2 p-1 text-base">
              About Us
            </Link>
          </div>
          <img
            src="./src/assets copy/973.jpg"
            alt="block"
            className=" max-h-32 object-cover rounded-lg mr-5 p-4"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 mx-auto mt-10"></div>
      </div>
      {bloge.map((bloge) => (
        <ProductCard
          id={bloge.id}
          title={bloge.title}
          thumbnail={bloge.thumbnail}
          description={bloge.description}
          author={bloge.author}
          date={bloge.date}
          key={bloge.id}
        />
      ))}
    </>
  );
}
export default App;
