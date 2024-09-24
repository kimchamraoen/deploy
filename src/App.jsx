import React, { useEffect, useState } from "react";
import ProductCard from "./components/card/ProductCard";
import getAllbloge from "./service/blogs/BlogeAction.js";
import { Link } from "react-router-dom";
import PostCard from "./pages/auth/PostCard.jsx";

function App() {
  const [bloges, setBloges] = useState([]); // Correct the variable name to plural for clarity

  useEffect(() => {
    async function fetchAllBloges() {
      try {
        const bloges = await getAllbloge();
        setBloges(bloges);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    }
    fetchAllBloges();
  }, []);

  return (
    <>
      <PostCard setBloges={setBloges} /> {/* Pass setBloges to PostCard */}
      {/* Hero section */}
      <div>
        <div className="bg-blue-950 w-full flex justify-between">
          <div className="flex image">
            <div className="my-auto ml-20">
              <div className="flex font-bold space-x-2">
                <h1 className="text-white text-lg">Welcome to</h1>
                <h1 className="text-amber-400 text-lg">STORY BRIDGE</h1>
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
            src="/assets/News-cuate.png"
            alt="block"
            className="max-h-72 object-cover rounded-xl mr-5"
          />
        </div>
      </div>

      {/* Blog section */}
      {bloges.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail || item.image}
          description={item.description || item.content}
          author={item.author}
          date={item.date}
        />
      ))}
    </>
  );
}

export default App;
