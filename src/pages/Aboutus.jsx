import React from "react";

export function AboutUs() {
  return (
    <div className="font-sans">
      {/* About Us Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. sapien fringilla, mattis ligula
          consectetur, ultrices mauris.
        </p>
      </section>

      {/* Quote Section */}
      <section className="flex justify-center items-center space-x-8 py-10 bg-gray-50">
        <img
          src="./public/assets/about-2.png"
          alt="about-us"
          className="w-1/3"
        />
        <blockquote className="max-w-md">
          <p className="text-xl italic text-gray-700">
            "We love Landingfolio! Our designers were using it for their
            projects, so clients already knew what Landingfolio was and how to
            use it."
          </p>
        </blockquote>
      </section>

      {/* Detail Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-4">Detail</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. sapien fringilla, mattis ligula
          consectetur, ultrices mauris.
        </p>
      </section>

      {/* Another Quote Section */}
      <section className="flex justify-center items-center space-x-8 py-10 bg-gray-50">
        <blockquote className="max-w-md">
          <p className="text-xl italic text-gray-700">
            "We love Landingfolio! Our designers were using it for their
            projects, so clients already knew what Landingfolio was and how to
            use it."
          </p>
        </blockquote>
        <img src="./public/assets/about-1.png" alt="about" className="w-1/3" />
      </section>

      {/* Our Mentors Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-6">Our Mentors</h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          <img
            src="./public/assets/mentor-1.jpg"
            alt="Mentor 1"
            className="w-48 h-48 rounded-full mx-auto"
          />
          <img
            src="./public/assets/mentor-2.jpg"
            alt="Mentor 2"
            className="w-48 h-48 rounded-full mx-auto"
          />
        </div>
      </section>

      {/* Our Members Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-6">Our Members</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <img
            src="./public/assets/sanom.jpg"
            alt="Member 1"
            className="w-36 h-36 rounded-full mx-auto"
          />
          <img
            src="./public/assets/chamraoen.jpg"
            alt="Member 2"
            className="w-36 h-36 rounded-full mx-auto"
          />
          <img
            src="./public/assets/kimhak-pic.jpg"
            alt="Member 3"
            className="w-36 h-36 rounded-full mx-auto"
          />
          <img
            src="./public/assets/marinet.jpg"
            alt="Member 4"
            className="w-36 h-36 rounded-full mx-auto"
          />
          <img
            src="./public/assets/chakrya.jpg"
            alt="Member 5"
            className="w-36 h-36 rounded-full ml-[310px]"
          />
          <img
            src="./public/assets/navy.jpg"
            alt="Member 6"
            className="w-36 h-36 rounded-full ml-[310px]"
          />
        </div>
      </section>
    </div>
  );
}
