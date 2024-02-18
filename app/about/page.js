// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-full lg:w-3/4 mx-auto mt-10 text-right text-justify">
      <h1 className="text-5xl font-extrabold mb-4 text-purple-800 text-center">
        About Us
      </h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img
            src="Team.jpg"
            alt="Our Team"
            className="w-full rounded-md shadow-md"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
            Our Team
          </h2>
        </div>
        <p className="text-gray-700 leading-6">
          We take pride in introducing ourselves as a dynamic and expert team in
          various fields. With a belief in the power of technology and
          innovation in solving challenges, we strive to provide novel and
          innovative solutions. Our team consists of experienced individuals
          committed to delivering high-quality services. Our goal is to provide
          constructive and innovative solutions for our customers, always
          meeting their needs and expectations. We are looking forward to
          collaborating with you to create unique and positive experiences.
        </p>
      </div>

      <a
        href="#"
        className="text-purple-800 hover:underline mt-6 inline-block text-center block"
      >
        More Information
      </a>
    </div>
  );
};

export default About;
