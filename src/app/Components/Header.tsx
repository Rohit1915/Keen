import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="relative bg-white mt-20 md:mt-20 lg:mt-36">
      <img 
        src="banner-1058142.jpg" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-2" style={{ fontFamily: "fantasy" }}>
        <div className=" flex flex-col justify-center items-center p-5 lg:p-10 relative z-10">
          <div tabIndex={0} className="text-black flex flex-col text-center h-full md:h-96 my-6 lg:my-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10 lg:mb-12">
              KEEN AND ABLE
            </h1>
            <span className="text-xl md:text-2xl lg:text-3xl">
              Doing Business the Open Way
            </span>
            <div className="mt-8 mx-10 md:mx-32 lg:mx-40">
              <p className="text-sm md:text-lg lg:text-xl">
                Our amazing Open Source journey started in the early 2000s. And what a ride it has been. We did not imagine that we would have such widespread adoption and deployment of Open Source technologies over the years. We are happy to have been able to play a bit of a role in that adoption by being a fellow traveler with our associates, customers, and partners alike.
              </p>
            </div>
          </div>
        </div>

        <div className="my-7 mx-32 lg:mx-28 lg:block lg:justify-center hidden relative z-10">
          <img className="md:h-[30rem] lg:h-[35rem] object-cover border-none bg-inherit w-full h-full opacity-30" src="our.jpeg" alt="Keen and Able" />
        </div>
      </div>
    </div>
  );
}

export default Header;
