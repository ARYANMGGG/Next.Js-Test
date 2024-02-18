// components/Navbar.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // تعریف متغیر menuOpen اینجا
  const [signInOpen, setSignInOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSignIn = () => {
    setSignInOpen(!signInOpen);
  };
  const [isBuySelected, setIsBuySelected] = useState(false);

  const handleButtonClick = () => {
    setIsBuySelected(!isBuySelected);
  };

  
  return (
    <>
    <div className=' bg-ar'>
    <nav className="bg-ar flex flex-wrap items-center justify-between py-4 sm:py-8">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="text-gray-900 text-3xl font-semibold sm:mr-12 ml-10 sm:ml-10 md:ml-20 lg:ml-36 xl:ml-48">Logo</span>
      </div>
      <div className="block sm:hidden">
        <button
          className="flex mr-10 items-center px-3 py-2 border rounded text-gray-900 border-gray-900 hover:text-white hover:border-white"
      
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } flex items-center py-4 w-full flex-grow sm:flex sm:items-center sm:w-auto`}
      >
        <ul className=" font-bold flex flex-col sm:flex-row list-none xl:space-x-12 lg:space-x-10 md:space-x-8 md:space-x-6 sm:space-x-4">
          <li className="nav-item">
            <a href="#" className="text-gray-900">
              Buy
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-gray-900">
              Sell
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-gray-900">
              Agents
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-gray-900">
              Rent
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-gray-900">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </div>
      
      <div className="hidden md:block sm:ml-4 mr-36">
        <button className="text-gray-900 px-8 py-2 rounded-md text-sm">
          Sign In/Sign Up
        </button>
        <button className="bg-blue-500 text-white px-8 py-2 rounded-md text-sm shadow-md">
          List your property
        </button>
      </div>
    </nav>
    </div>
     
    <div className="bg-ar flex flex-col sm:flex-row justify-between items-center py-4 ml-10 sm:ml-10 md:ml-20 lg:ml-36 xl:ml-48">
  <div className="text-gray-900 sm:w-2/3">
    <div className="hidden md:block bg-bb text-sm text-white px-3 py-2 rounded-3xl inline-block">
      <h1 className="bg-blue-500 text-white rounded-xl inline-block px-2">New</h1>
      <h1 className="text-white rounded-xl inline-block ml-2">We just launched our service in Luxembourg.</h1>
    </div>
    <p className="text-6xl mt-4 mb-3 font-bold">Find your dream </p>
    <p className="text-6xl mb-4 font-bold">home in Europe.</p>
    <p className="text-base mb-6">Search homes in 70 different countries represented by 550 LeadingRE member brokerages.</p>
    <div className="flex items-center">
      <button
        id="buyButton"
        className={`bg-${isBuySelected ? 'white' : 'black'} text-${isBuySelected ? 'black' : 'white'} px-7 mb-3 py-3 rounded-l-md shadow-md`}
        onClick={handleButtonClick}
      >
        Buy
      </button>
      <button
        id="sellButton"
        className={`bg-${isBuySelected ? 'black' : 'white'} text-${isBuySelected ? 'white' : 'black'} px-7 mb-3 py-3 rounded-r-md shadow-md`}
        onClick={handleButtonClick}
      >
        Sell
      </button>
    </div>
    <div className="flex items-center">
      <input type="text" placeholder="Search by city, address, zip, agent, MLS... " className="px-4 py-5 rounded-l-md w-80 sm:w-96 outline-none shadow-md" />
      <div className="bg-white text-white px-3 py-4 rounded-r-md shadow-md">
        <div className="bg-blue-500 text-white px-1 py-1 rounded-sm shadow-md">
          <img className='w-6 h-6' src="/search.png" alt="search" />
        </div>
      </div>
    </div>
    <div className="flex justify-start mt-4 text-xs ">
      <p className="px-2 py-1">Recent Search:</p> 
      <button className="bg-white text-black px-2 py-1 rounded shadow-md mr-1">2 BHK</button>
      <button className="bg-white text-black px-2 py-1 rounded shadow-md mr-1">Banglaw</button>
      <button className="bg-blue-500 text-white px-2 py-1 rounded shadow-md mr-1">Apartment</button>
      <button className="bg-white text-black px-2 py-1 rounded shadow-md mr-1">London</button>
      <button className="bg-white text-black px-2 py-1 rounded shadow-md mr-1">Badupest</button>
    </div>
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-10">
    <img className='w-11/12 h-11/12 mr-1' src="/New.png" alt="Image" />
  </div>
</div>
    </>
  );
};

export default Navbar;

