import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className=" w-full  bg-[#0e245385] " style={{ fontFamily: "fantasy" }}>
      <div className="flex items-center justify-between mx-2">
        <div className="flex">
          <img src="logo.webp" alt="Logo_KNA.png" className=" h-20 md:h-28" />
          <div className="ml-4 mt-4">
            {" "}
            <h1 className=" text-xl sm:text-2xl md:text-3xl text-white ">KEEN AND ABLE</h1>
            <span className="text-white">Always Been Open!</span>
          </div>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-8 text-lg mr-10 text-white ">
          <Link href="#">
            {" "}
            <li className="hover:text-white hover:underline">Home</li>
          </Link>
          <Link href="/page">
            {" "}
            <li className="hover:text-white hover:underline">About</li>
          </Link>
          <li className="hover:text-white hover:underline">Services</li>
          <li className="hover:text-white hover:underline">Partners</li>
          <li className="hover:text-white hover:underline">FAQ</li>
          <li className="hover:text-white hover:underline">Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
