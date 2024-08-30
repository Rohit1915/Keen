"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className=" w-full  bg-[#557ed685] " style={{ fontFamily: "fantasy" }}>
      <div className="flex items-center justify-between mx-2">
        <div className="flex">
          <img src="logo.webp" alt="Logo_KNA.png" className=" h-20 md:h-28" />
          <div className="ml-4 mt-4">
            {" "}
            <h1 className=" text-xl sm:text-2xl md:text-3xl text-white ">
               KEEN AND ABLE
            </h1>
            <span className="text-white text-sm md:text-lg">
              Always Been Open!
            </span>
          </div>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-8 text-lg mr-10 text-white ">
          <Link href="/">
            <li className="hover:text-white hover:underline">Home</li>
          </Link>
          <Link href="/About">
            <li className="hover:text-white hover:underline">About</li>
          </Link>
          <Link href="/Service">
            <li className="hover:text-white hover:underline">Services</li>
          </Link>
          <li className="hover:text-white hover:underline">Partners</li>
          <li className="hover:text-white hover:underline">FAQ</li>
          <li className="hover:text-white hover:underline">Blog</li>
        </ul>
        <div className="block md:hidden " onClick={toggleMenu}>
          <GiHamburgerMenu className="text-3xl"/>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 p-2">
          <ul className="bg-gray-700 flex flex-col gap-1 p-2 w-40 text-black text-xl">
            <Link href="/">
              <li className="hover:text-white hover:underline">Home</li>
            </Link>
            <Link href="/About">
              <li className="hover:text-white hover:underline">About</li>
            </Link>
            <Link href="/Service">
              <li className="hover:text-white hover:underline">Services</li>
            </Link>
            <li className="hover:text-white hover:underline">Partners</li>
            <li className="hover:text-white hover:underline">FAQ</li>
            <li className="hover:text-white hover:underline">Blog</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
