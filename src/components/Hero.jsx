import React from "react";

const Hero = () => (
  <div className="h-screen flex items-center justify-between px-16">
  {/* Left Side - Focused on Your Goals */}
  <div className="flex-1 text-left">
    <div className="text-black text-[4rem] font-extrabold leading-tight">
      FOCUSED ON <br /> YOUR GOALS
    </div>
  </div>

  {/* Right Side - Description and Button */}
  <div className="flex-1 text-left text-gray-700 text-lg mt-10">
    <p>
      We specialize in crafting tailored <span className="font-bold">marketing</span> strategies that are as unique as your brand. From developing targeted social media campaigns to optimizing your online presence, we use a mix of creativity and strategic insights to elevate your brand to the next level.
    </p>
    <a
      href="#"
      className="mt-8 inline-block bg-pink-500 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300"
    >
      ABOUT US → 
    </a>
  </div>
</div>
);

export default Hero;
