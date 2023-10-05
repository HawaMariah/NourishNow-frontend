// Donations.js
import React from "react";

const Donations = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Image Div */}
      <div className="relative w-full">
        <img
          src="/images/6.jpeg"
          alt="Donate Today Image"
          className="w-full h-80 object-cover fade-in-image"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-red-500 w-full">
          <p className="text-8xl font-extrabold font-shadows text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 shadow-lg ">
            Donate Today
          </p>
          <p className="text-6xl font-extrabold font-shadows text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 shadow-lg">
            Save a Life
          </p>
        </div>
      </div>

      {/* Content Div */}
      <div className="w-full p-7 bg-gray-300 text-center">
        <div className="inline-block w-full md:w-1/2 shadow-md p-9 bg-white">
          <h2 className="text-2xl mb-4">Donate Options</h2>
          <ul>
            <li>
              <a
                href="donate_funds_form"
                className="block w-full text-center bg-gray-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                Donate Funds
              </a>
            </li>
            <li className="mt-2">
              <a
                href="donate_items_form"
                className="block w-full text-center bg-gray-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                Donate Items
              </a>
            </li>
          </ul>
        </div>

        {/* Willingness to Give */}
        <div className="inline-block w-full md:w-1/2 mt-8">
          <h2 className="text-2xl mb-4">Willingness to Give</h2>
          <p className="text-gray-700">
            As the Nourish Now organization, our aspiration is to embody the
            transformative change we wish to witness in the world. We aim to
            bring light into the lives of numerous families and children facing
            adversity, offering them access to education and fulfilling their
            basic needs.
          </p>
          <div className="mt-4">
            <p className="text-gray-700">
              "The joy of giving lasts longer than the pleasure of receiving."
            </p>
            <p className="text-gray-700">
              "Giving is not just about making a donation, it's about making a
              difference."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
