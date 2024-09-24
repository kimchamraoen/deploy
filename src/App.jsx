import React, { useEffect, useState } from "react";
import ProductCard from "./components/card/ProductCard";
import getAllbloge from "./service/blogs/BlogeAction.js";
import { Link } from "react-router-dom";
import PostCard from "./pages/auth/PostCard.jsx";

function App() {
  const [bloges, setBloges] = useState([]); // State to hold blog data

  useEffect(() => {
    // Function to load blog data from local storage or API
    const loadBloges = () => {
      const storedBloges = JSON.parse(localStorage.getItem("bloges"));
      if (storedBloges) {
        setBloges(storedBloges); // Set state with stored data
      } else {
        fetchAllBloges(); // Fetch from API if nothing is stored
      }
    };

    // Fetch all blogs from the API
    const fetchAllBloges = async () => {
      const fetchedBloges = await getAllbloge();
      setBloges(fetchedBloges);
      localStorage.setItem("bloges", JSON.stringify(fetchedBloges)); // Store in local storage
    };

    loadBloges(); // Load bloges when the component mounts
  }, []);

  // Function to handle adding a new card
  const handleAddCard = (newCard) => {
    const newBlog = {
      id: bloges.length > 0 ? bloges[bloges.length - 1].id + 1 : 1, // Simple ID generation
      title: newCard.title,
      content: newCard.content,
      image: newCard.image,
      author: newCard.author,
      date: newCard.date || new Date().toLocaleDateString(), // Add current date if not provided
    };

    const updatedBloges = [...bloges, newBlog];
    setBloges(updatedBloges); // Update state with new blog
    localStorage.setItem("bloges", JSON.stringify(updatedBloges)); // Store updated blogs in local storage
  };

  return (
    <>
      <PostCard onAddCard={handleAddCard} /> {/* Pass the handler to PostCard */}

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
          thumbnail={item.image}
          description={item.content}
          author={item.author}
          date={item.date}
        />
      ))}
    </>
  );
}

export default App;
