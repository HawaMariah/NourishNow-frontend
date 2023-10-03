import React from "react";
import { BiHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
function Nav() {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row bg-[#7E8F90] text-white">
        <div>
          <a
            href="#"
            className="font-mono text-4xl  flex items-center"
          >         
            <BiHeart   />
            NourishNow
          
          </a>
        </div>
        <div className="space-x-4">
          <div className=" hidden  lg:block space-x-2">
            <a
              href="#"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Donate
            </a>
            <a
              href="#"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Events
            </a>
            <a
              href="#"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              Contact US
            </a>
            <a
              href="#"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text-xl"
            >
              FAQs
            </a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="cursor-pointer"
              />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} />
            )}
          </div>
        </div>
      </div>
      <div>
        {toggle ? (
          <div className=" lg:hidden flext justify-between ml-10">
            <ul>
              <li className="text-xl mb-2 cursor-grab">Home</li>
              <li className="text-xl mb-2 cursor-grab">Donate</li>
              <li className="text-xl mb-2 cursor-grab">Events</li>
              <li className="text-xl mb-2 cursor-grab">Contact Us</li>
              <li className="text-xl mb-2 cursor-grab">FAQs</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Nav;
