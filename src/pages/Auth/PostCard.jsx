import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostCard({ setBloges }) { // Rename prop to be more descriptive
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardTitle, setCardTitle] = useState("");
  const [cardContent, setCardContent] = useState("");
  const [cardImage, setCardImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle adding a new card
  const handleAddCard = (e) => {
    e.preventDefault();
    if (cardTitle.trim() && cardContent.trim() && cardImage) {
      const newCard = {
        id: Date.now(), // Unique ID based on timestamp
        title: cardTitle,
        content: cardContent,
        image: URL.createObjectURL(cardImage), // Image URL for rendering
      };

      // Call the setBloges function passed from parent
      setBloges((prevBloges) => [...prevBloges, newCard]);

      // Clear input fields
      setCardTitle("");
      setCardContent("");
      setCardImage(null);
      setSelectedImage(null); // Clear image preview

      // Provide feedback to the user
      setSuccessMessage("Card added successfully!");

      // Clear the message after a short duration
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000); // Reset message after 2 seconds
    } else {
      setSuccessMessage("Please fill in all fields!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCardImage(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Form for adding a card */}
      <form onSubmit={handleAddCard} className="mb-4">
        <ReactQuill
          value={cardTitle}
          onChange={setCardTitle}
          placeholder="Enter card title"
          className="border border-gray-300 mb-2"
        />
        <div className="flex items-center justify-center w-full mb-4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          {selectedImage && (
            <div className="mt-4">
              <img
                src={selectedImage}
                alt="Uploaded Preview"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          )}
        </div>
        <ReactQuill
          value={cardContent}
          onChange={setCardContent}
          placeholder="Enter card content"
          className="border border-gray-300 mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Card
        </button>

        {/* Success message */}
        {successMessage && (
          <p className="mt-2 text-green-600 font-semibold">{successMessage}</p>
        )}
      </form>
    </div>
  );
}

export default PostCard;
