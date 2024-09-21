import React, { useEffect, useState } from "react";
import { NavbarComponent } from "./components/layout/Navbar";
import { Footercomponent } from "./components/layout/Footer";
import ProductCard from "./components/card/ProductCard";
import { getAllProducts } from "./service/product/productAction";
import ProfileCard from "./pages/auth/EditProfile";


function App() {
  const [products, setProducts] = useState([]);
  console.log("products", products);

  useEffect(() => {
    async function fetchAllProducts() {
      let product = await getAllProducts();
      setProducts(product);
    }
    fetchAllProducts();
  }, []);

  return (
    <>
      {/* <NavbarComponent /> */}
      {/* <NewPassword/> */}
      {/* <ProfileCard /> */}
      <div>
        <div className="bg-blue-950 w-full mt-[5rem] flex justify-between wrap ">
          <div className="ml-5 mt-3">
            <div className="flex font-bold space-x-2 ">
              <h1 className="text-white text-lg ">Welcome to </h1>
              <h1 className="text-amber-400 text-lg "> STORY BRIDGE</h1>
            </div>
            <p className="text-white text-sm my-3">
              A knowledge-sharing platform that allows users to create, share,
              and explore insightful articles across various topics.
            </p>
            <button className="text-white border-2 p-1 text-base">About Us</button>
          </div>
          <img
            src="./src/assets copy/973.jpg"
            alt="block"
            className=" max-h-32 object-cover rounded-lg mr-5 p-4"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              image={product.images[0]} // Ensure each ProductCard has a unique key
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
