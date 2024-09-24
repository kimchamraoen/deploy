import React, { useEffect, useState } from "react";
import ProductCard from "./components/card/ProductCard";
<<<<<<< HEAD
import getAllbloge from "./service/blogs/BlogeAction.js";
import ProfileCard from "./pages/auth/EditProfile";
import { Link } from "react-router-dom";
import Post from "./pages/auth/Post.jsx";
function App() {
  const [bloge, setbloge] = useState([]);
=======
import { getAllProducts } from "./service/product/productAction";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [products, setProducts] = useState([]);
  console.log("products", products);
>>>>>>> 3331b5ca0fb87bb85cda8901d6f46929c2855245
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
      <Post/>
      <div>
<<<<<<< HEAD
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
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              image={product.images[0]} // Ensure each ProductCard has a unique key
              title={product.title}
              description={product.description}
            />
          ))}
>>>>>>> 3331b5ca0fb87bb85cda8901d6f46929c2855245
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
