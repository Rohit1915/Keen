import React from 'react'

function Header() {
    return (
        <div className="h-[70%]">
          <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2  h-[80%] mt-[5%] border-none">
            <div className="bg-[#bebebe] h-[40rem] text-center">
           <div className="mt-[10%] text-black gap-[10%] ">
             <h1 className="text-[30px] md:text-[50px] mx-[10rem]" style={{fontFamily:'fantasy'}}>
            KEEN AND ABLE
            </h1> <br /><br />
            <span className=" mx-[10rem] mt-[10%] text-[25px]" style={{fontFamily:'fantasy'}} >
            Doing Business the Open Way
            </span> <br /> <br />
            <p className="mx-[10rem]" style={{fontFamily:'fantasy'}}>
            Our amazing Open Source journey started in early 2000s. And what a ride it has been. We did not imagine that we would have such widespread adoption and deployment of Open Source technologies over the years. We are happy to have been able to play a bit of role in that adoption by being a fellow traveller with our associates, customers and partners alike
            </p></div>
            </div>
            
            <div className="h-[40rem] bg-white"> 
        <div className="h-[40re]">
        <img className="h-[40rem] w-[100%] "
        src="pikaso_texttoimage_Doing-Business-the-Open-Way.jpeg"
      /></div> 
    </div>
            </div>  
        </div>
    );
}

export default Header;