import React from 'react'
// import { FaHandHoldingDroplet } from "react-icons/fa";




function NavBar() {
  
  return (
    <>
   
      <div className="flex items-center justify-end p-10 bg-[#7E8F90]">

        <div className="">
          <div className="space-x-5 mr-10 ">
            <a href="#" className="hover:bg-gray-500 rounded-full px-5 py-2  text-xl">
              Home
            </a>
            <a href="#" className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl">
              Donate
            </a>
            <a href="#" className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl">
              Events
            </a>
            <a href="#" className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl">
              Contact Us
            </a>
            <a href="#" className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl">
              FAQs
            </a>
          </div>
        </div>
        <div className="">
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-500">
            Sign in
          </button>
        </div>

      </div>

    
    
      
    </>
  );
  
}


export default NavBar

