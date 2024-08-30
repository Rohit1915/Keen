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
  };


  return (
    <div className="w-full  bg-[#557ed685] " style={{ fontFamily: "fantasy" }}>
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
          <Link href="https://www.keenable.in/blog"> <RiLoginBoxFill title="Login" className="text-3xl hover:text-red-700"/></Link>
         <Link href="https://www.google.com/maps/place/Keen+%26+Able+Computers+Private+Limited/@28.615043,77.377373,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5600e9000bf:0x5195188f982b98a9!8m2!3d28.615043!4d77.377373!16s%2Fg%2F11c2j6_xp9?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
          <IoLocation title="Location" className="text-3xl hover:text-red-700"/> </Link>
        </ul>
        
        <div className="block md:hidden " onClick={toggleMenu}>
          <GiHamburgerMenu className="text-3xl"/>
        </div>
      </div>

      {isMenuOpen && (
        <div className="text-center p-2">
          <ul className="bg-gray-700 flex flex-col gap-1 p-2 text-black text-xl">
            <Link href="/">
              <li className="hover:text-white hover:underline">Home</li>
            </Link>
            <Link href="/About">
              <li className="hover:text-white hover:underline">About</li>
            </Link>
            <Link href="/Service">
              <li className="hover:text-white hover:underline">Services</li>
            </Link>
            <Link href="/Partner"><li className="hover:text-white hover:underline">Partners</li></Link>
            <li className="hover:text-white hover:underline">FAQ</li>
         
          <div className="w-full flex justify-center gap-10">
          <Link href="https://www.keenable.in/blog"> <RiLoginBoxFill title="Login" className="text-3xl hover:text-red-700"/></Link>
         <Link href="https://www.google.com/maps/place/Keen+%26+Able+Computers+Private+Limited/@28.615043,77.377373,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5600e9000bf:0x5195188f982b98a9!8m2!3d28.615043!4d77.377373!16s%2Fg%2F11c2j6_xp9?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
          <IoLocation title="Location" className="text-3xl hover:text-red-700"/> </Link>
          </div> </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
