// pages/about.js
import React from 'react';

const PhoneApp = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-full lg:w-3/4 mx-auto mt-10 text-right text-justify">
      <div className="bg-neutral-200 p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          LAPTOPS: VITAL TOOLS IN THE MODERN WORLD
        </h1>
        <p className="text-gray-600">
          Laptops are considered one of the most versatile and essential tools in today's life. These portable devices play a crucial role in facilitating and enhancing communication, education, work, and entertainment for individuals. In this article, we will explore some key points about laptops.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-blue-100 relative p-4 rounded-md shadow-md mb-4">
          <img
            src="phone.jpg"
            alt="Image 1"
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
 
          </div>
        </div>

        <div className="bg-blue-100 relative p-4 rounded-md shadow-md mb-4">
          <img
            src="phone.jpg"
            alt="Image 2"
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
 
          </div>
        </div>
      </div>

      <p className="bg-neutral-200 text-gray-700 leading-6 mt-8 p-4 rounded-md">
        {/* Continuing article text */}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-blue-100
         relative p-4 rounded-md shadow-md mb-4">
          <img
            src="phone.jpg"
            alt="phone.jpg"
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
   
          </div>
        </div>

        <div className="bg-blue-100 relative p-4 rounded-md shadow-md mb-4">
          <img
            src="phone.jpg"
            alt="Image 4"
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">

          </div>
        </div>
      </div>

      <a
        href="#"
        className="text-purple-800 hover:underline mt-8 inline-block text-center block"
      >
        Read More
      </a>
    </div>
  );
};

export default PhoneApp;
