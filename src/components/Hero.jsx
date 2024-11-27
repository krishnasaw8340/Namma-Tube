import React from "react";

const Hero = () => (
  <section className="w-full h-screen flex flex-col justify-center items-center bg-blue-500 text-white text-center px-4">
    <h1 className="text-4xl font-bold mb-4">Focused On Your Goals</h1>
    <p className="text-lg mb-6">
      We specialize in crafting tailored marketing strategies that are as unique as your brand.
      From developing targeted social media campaigns to optimizing your online presence, we use
      a mix of creativity and strategic insights to elevate your brand to the next level.
    </p>
    <button className="bg-white text-blue-500 px-6 py-3 rounded-full flex items-center">
      <img src="/logo.svg" alt="Logo" className="w-6 h-6 mr-2" />
      About Us
    </button>
  </section>
);

export default Hero;
