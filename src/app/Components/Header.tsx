import Link from "next/link";
import React from "react";

function Header() {
  return (
<div className="bg-[#f0eded]">
  <div className="grid grid-cols-1  lg:grid-cols-2" style={{ fontFamily: "fantasy" }}>
    <div className="bg-[#f5f1f1] flex flex-col justify-center items-center p-5 lg:p-10">
      <div className="text-black flex flex-col text-center h-full md:h-96 my-16 lg:my-20">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10 lg:mb-12">
            KEEN AND ABLE
          </h1>
          <span className="text-xl md:text-2xl lg:text-3xl">
            Doing Business the Open Way
          </span>
        </div>
        <div className="mt-8 mx-10 md:mx-32 lg:mx-40">
          <p className="text-sm md:text-lg lg:text-xl">
            Our amazing Open Source journey started in the early 2000s. And what a ride it has been. We did not imagine that we would have such widespread adoption and deployment of Open Source technologies over the years. We are happy to have been able to play a bit of a role in that adoption by being a fellow traveler with our associates, customers, and partners alike.
          </p>
        </div>
      </div> 
    </div>

    <div className="my-7 mx-32 lg:mx-10 lg:block lg:justify-center hidden ">
      <img className="md:h-[30rem] lg:h-[35rem] rounded-full" src="nfjf.jpeg" alt="Keen and Able" />
    </div>
  </div>
</div>
  );
}

export default Header;
