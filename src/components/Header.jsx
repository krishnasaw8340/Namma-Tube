import React, { useState, useEffect } from "react";

const Header = () => {
  // Add image carousel functionality
  const images = [
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6fa1339ed219d3a7421e_template-img-09.webp",
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9d339ed219d3a74090_template-img-11.webp",
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9c339ed219d3a73f7e_template-img-10.webp",
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9b339ed219d3a73e8f_template-img-01.webp",
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9d339ed219d3a7403e_template-img-02.webp",
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6fa1339ed219d3a741f6_template-img-07.webp",
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9a339ed219d3a73e4f_template-img-04.webp",
    "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9e339ed219d3a74127_template-img-06.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-around p-8 space-y-8">
        {/* Section 1 */}
        <div className="p-6 border border-black rounded-full flex items-center justify-between">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-black rounded-b-full"></div>
          <h2 className="text-3xl font-bold text-black">HYPEFY</h2>
          <p className="text-gray-600 ml-4">CREATE IMPACT</p>
        </div>


        {/* Section 2 */}
        <div className="p-6 border rounded-lg shadow-md">
          <h1 className="text-[6rem] font-bold text-black leading-tight">TOGETHER, WE GROW</h1>

          <p className="text-gray-600 mt-4">
            We are a team of digital <span className="font-bold">strategists</span> focused on boosting your online presence.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-6 rounded-lg shadow-lg flex items-center">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-md flex items-center hover:shadow-lg transition duration-300">
            GET STARTED <span className="ml-2">→</span>
          </button>
        </div>


        {/* Section 4 */}
        {/* <div className="p-6 border border-black rounded-full">
          <h2 className="text-2xl font-bold text-black">Our Mission</h2>
          <p className="text-gray-600">
            Empower businesses with creative solutions to achieve growth.
          </p>
        </div> */}

        {/* Section 5 */}
        {/* <div className="p-6 border border-black rounded-full">
          <h2 className="text-2xl font-bold text-black">Join Us</h2>
          <p className="text-gray-600">Be a part of our growing team.</p>
        </div> */}
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-8">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full max-w-md object-cover rounded-full shadow-lg transition-transform duration-500 ease-in-out animate-move"
        />
      </div>
    </div>
  );
};

export default Header;
