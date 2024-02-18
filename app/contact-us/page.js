// pages/contact.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-200">
      <div className="max-w-3xl w-full p-8 border rounded-3xl shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact US</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
             Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Your message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border rounded-md"
            ></textarea>
          </div>
          {}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 block w-full"
          >
            SEND          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
