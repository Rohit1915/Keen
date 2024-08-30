import React from 'react'

function Service() {
  return (
    <div className="bg-[#9db0b1] pt-[4rem] md:pt-[6rem] pb-[5rem]" style={{fontFamily:'fantasy'}}>
    <h1 className="text-center text-white text-[28px] sm:text-[33px] text-xl md:text-3xl font-bold uppercase">SERVICES</h1>
    <p className="mx-5 text-center md:text-center mt-[2rem] text-base md:text-xl text-black">Openly Trying To Exceed Your Expectations</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[4rem] mt-[4rem] text-black">
  
          <div className="bg-[#e97561] hover:scale-110 transform transition-all duration-300 hover:-rotate-10 uppercase text-center p-[1rem]">
            <img src="sdf.jpeg"
            className=""
            alt="" /> <br />
            <p> Over the years, we have come across many situations where a design mistake has already been made when we are called. It is a very tough situation for a customer and we can totally empathise with it. Should the customer go ahead knowing that there is an issue due to cost, time and other considerations; or should start afresh. There is no easy answer here. But what we have realised is that the software design and architecture should be open and have a building blocks approach to make it last. Our areas of interest here are  </p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
      
      
        <div className="bg-[#e97561] hover:scale-110 transform transition-all duration-300 hover:-rotate-10 uppercase font-semibold text-center p-[1rem]">
        <img src="ggg.jpeg"
            className="h-[10rem] ml-20 md:ml-[30%]"
            alt="" /> <br />
            <p> We provide deployment services for almost any technology in Open Source realm. This list has been evergrowing over the years. Our motto being simple - if we do not know it, we learn it. After all, we have always been Open! We are always willing to walk the path with our customers on their Open Source deployment journey.</p>
            </div>
            

      <div className="bg-[#e97561] hover:scale-110 transform transition-all duration-300 hover:-rotate-10 uppercase font-semibold text-center p-[1rem]">
      <br />
      <img src="eee.jpeg"
            className="h-[10rem] ml-20 md:ml-[30%]"
            alt="" /> <br />
            <p> For customers requiring long term support for their Open Source technology deployments, we help form teams to manage the deployments. All of this with an open mind. We help our customers break their mould of limitation by helping them deploy Open Source technologies in newer areas as well.</p>
      </div>
    </div>
  </div>
  )
}

export default Service