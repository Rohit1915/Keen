import Link from "next/link";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-gray-900 py-2 md:py-[2rem]">
      <div className="ml-72 md:ml-28 flex">
       <Link href="https://www.facebook.com/Alwaysbeenopen/" target="_blank"> <ImFacebook2 className="mr-4 text-3xl md:text-4xl" /> </Link>
       <Link href="https://www.linkedin.com/company/keenable" target="_blank"> <IoLogoLinkedin className="text-[2rem] md:text-[2.8rem]" /> </Link>
      </div>
      <div className="text-white text-center mt-0">
        <p className="mb-2 mt-3">+91 120 421 7213</p>
        <p className="mb-2">sales@keenable.in</p>
        <p className="mb-7">
          B149, Ground Floor, Sector 63, Noida, India - 201301
        </p>
        <p className="mb-7">©2024 by Keen and Able Computers Pvt. Ltd.</p>
        <p className="mb-1 text-[12px]">
          All Trademarks and Logos used throughout the site are property of
          their respective owners
        </p>
        <p className="mb-1 text-[12px]">
          All images used on the website have been used courtesy Pixabay.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
