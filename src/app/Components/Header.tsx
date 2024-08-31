import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-[#bebebe]">
      <div className=" grid-cols-1 grid lg:grid-cols-2 " style={{ fontFamily: "fantasy" }}>
        <div className="bg-[#bebebe] flex flex-col justify-center  items-center ">
          <div className=" text-black flex flex-col  text-center h-full md:h-96 my-16">
            <div>

            <h1
              className="text-2xl md:text-3xl mb-6 md:mb-10"
              >
              KEEN AND ABLE
            </h1>
            <span
              className="text-xl md:text-2xl"
              >
              Doing Business the Open Way
            </span>
              </div>
              <div className="mt-8 mx-10 md:mx-32">
 
            <p className="text-sm md:text-lg">
              Our amazing Open Source journey started in early 2000s. And what a
              ride it has been. We did not imagine that we would have such
              widespread adoption and deployment of Open Source technologies
              over the years. We are happy to have been able to play a bit of
              role in that adoption by being a fellow traveller with our
              associates, customers and partners alike
            </p>
              </div>
          </div>
        </div>

        <div className=" my-7 mx-32 hidden md:block">
            <img
              className=" md:h-[30rem] rounded-full"
              src="nfjf.jpeg"
            />
        </div>
      </div>
    </div>
  );
}

export default Header;
