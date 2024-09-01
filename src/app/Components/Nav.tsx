"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { RiLoginBoxFill } from "react-icons/ri";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <div className="w-full bg-white" style={{ fontFamily: "fantasy" }}>
      <div className="flex items-center justify-between mx-2 lg:mx-10">
        <div className="flex">
          <img src="logo.webp" alt="Logo_KNA.png" className="h-20 lg:h-36 p-1 lg:p-4" />
          <div className="ml-4 mt-6">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black">
              KEEN AND ABLE
            </h1>
            <span className="text-black text-sm md:text-lg lg:text-xl">
              Always Been Open!
            </span>
          </div>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-4 lg:gap-12 text-lg lg:text-xl mr-10 text-black">
          <Link href="/">
            <li className="hover:text-yellow-600 hover:font-bold ">Home</li>
          </Link>
          <Link href="/About">
            <li className="hover:text-yellow-600 hover:font-bold">About</li>
          </Link>
          <Link href="/Service">
            <li className="hover:text-yellow-600 hover:font-bold">Services</li>
          </Link>
          <Link href="/Partner">
            <li className="hover:text-yellow-600 hover:font-bold">Partners</li>
          </Link>
         <Link href="/Faq"> <li className="hover:text-yellow-600 hover:font-bold">FAQ</li> </Link>
          <Link href="">
            <RiLoginBoxFill
              title="Login"
              className="text-3xl lg:text-4xl hover:text-red-700"
            />
          </Link>
          <Link
            href="https://www.google.com/maps/place/Keen+%26+Able+Computers+Private+Limited/@28.615043,77.377373,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5600e9000bf:0x5195188f982b98a9!8m2!3d28.615043!4d77.377373!16s%2Fg%2F11c2j6_xp9?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <IoLocation
              title="Location"
              className="text-3xl lg:text-4xl hover:text-red-700"
            />
          </Link>
        </ul>

        <div className="block md:hidden" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-3xl text-black" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-100 flex justify-center items-center z-50">
          <div className="relative w-full max-w-sm mx-auto">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="bg-gray-500 text-center flex flex-col gap-4 p-20 rounded-md shadow-lg text-black text-2xl">
              <Link href="/" onClick={toggleMenu}>
                <li className="hover:text-yellow-500 hover:font-bold transition duration-300">
                  Home
                </li>
              </Link>
              <Link href="/About" onClick={toggleMenu}>
                <li className="hover:text-yellow-500 hover:font-bold transition duration-300">
                  About
                </li>
              </Link>
              <Link href="/Service" onClick={toggleMenu}>
                <li className="hover:text-yellow-500 hover:font-bold transition duration-300">
                  Services
                </li>
              </Link>
              <Link href="/Partner" onClick={toggleMenu}>
                <li className="hover:text-yellow-500 hover:font-bold transition duration-300">
                  Partners
                </li>
              </Link>
              <li className="hover:text-yellow-500 hover:font-bold transition duration-300">
                FAQ
              </li>

              <div className="flex justify-center gap-8 mt-4">
                <Link href="" onClick={toggleMenu}>
                  <RiLoginBoxFill
                    title="Login"
                    className="text-3xl hover:text-red-500 transition duration-300"
                  />
                </Link>
                <Link
                  href="https://www.google.com/maps/place/Keen+%26+Able+Computers+Private+Limited/@28.615043,77.377373,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5600e9000bf:0x5195188f982b98a9!8m2!3d28.615043!4d77.377373!16s%2Fg%2F11c2j6_xp9?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  onClick={toggleMenu}
                >
                  <IoLocation
                    title="Location"
                    className="text-3xl hover:text-red-500 transition duration-300"
                  />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
