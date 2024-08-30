import React from "react";

function Header() {
  return (
    <div className="">
      <div className="mx-0 md:mx-10 grid-cols-1 grid lg:grid-cols-2 mt-0 md:mt-20" style={{ fontFamily: "fantasy" }}>
        <div className="bg-[#bebebe] flex flex-col justify-center  items-center ">
          <div className=" text-black flex flex-col  text-center h-full md:h-96 my-16">
            <div>

            <h1
              className="text-3xl mb-10"
              >
              KEEN AND ABLE
            </h1>
            <span
              className="text-lg md:text-xl"
              >
              Doing Business the Open Way
            </span>
              </div>
              <div className="mt-8 mx-10 md:mx-20">
 
            <p>
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

        <div className="h-[30rem] md:h-[40rem] bg-white">
          <div>
            <img
              className="h-[30rem] md:h-[40rem] w-[100%] "
              src="pikaso_texttoimage_Doing-Business-the-Open-Way.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
