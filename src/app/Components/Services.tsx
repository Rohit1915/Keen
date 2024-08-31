import React from 'react'

function Services() {
  return (
    <div className="bg-[#9db0b1] pt-[4rem] md:pt-[6rem] pb-[5rem]" style={{fontFamily:'fantasy'}}>
    <h1 className="text-center text-white text-[28px] sm:text-[33px] text-2xl md:text-3xl font-bold uppercase">OUR <span className="text-yellow-400">SERVICES</span></h1>
    <p className="mx-5 text-center md:text-center mt-[2rem] text-base md:text-xl text-black">Here’s What We Think We Provide Today. And We Have Always Been Open To New Areas</p>
    <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 mt-[5%] border-none ">
        <img className="h-[350px] w-[700px] hidden md:block" src="aerial-view-business-team.jpg" alt="" />
        <img src="plant.png" alt="" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-center gap-5 md:gap-[4rem] mt-5 md:mt-[4rem] text-black">
      <div>
          <div className="bg-slate-400 md:bg-[#e97561] md:hover:scale-110 transform transition-all duration-300 hover:-rotate-10 uppercase text-center p-[1rem]">
            <h2 className=" text-xl">ARCHITECTING </h2> <br />
            <img src="aac.jpeg"
            className="h-[8rem] md:h-[10rem] mx-20 md:ml-[30%]"
            alt="" /> <br />
            <p className="text-xs md:text-sm"> A well thought out architecture helps our customers be in control of their deployments long after we complete our work. With our experience of working with varied customer scenarios across the world, we provide software architecting services to help design the software keeping the bigger picture in mind.  </p>
          </div>
      </div>
      
      <div>
        <div className="bg-slate-400 md:bg-[#e97561] md:hover:scale-110 transform transition-all duration-300 hover:-rotate-10  md:h-[24rem] uppercase text-center p-[1rem]">
        <h2 className="text-xl">DEPLOYMENT</h2> <br />
        <img src="ggg.jpeg"
            className="h-[8rem] md:h-[10rem] mx-20 md:ml-[30%]"
            alt="" /> <br />
            <p className="text-xs md:text-sm"> We provide deployment services for almost any technology in Open Source realm. This list has been evergrowing over the years. Our motto being simple - if we do not know it, we learn it. After all, we have always been Open! We are always willing to walk the path with our customers on their Open Source deployment journey.</p>
            </div>
            </div>

      <div>
      <div className="bg-slate-400 md:bg-[#e97561] md:hover:scale-110 transform transition-all duration-300 hover:-rotate-10 md:h-[24rem] uppercase text-center p-[1rem]">
       <h2 className="text-xl ">SUPPORT</h2>
      <br />
      <img src="eee.jpeg"
            className="h-[8rem] md:h-[10rem] mx-20 md:ml-[30%]"
            alt="" /> <br />
            <p className="text-xs md:text-sm"> For customers requiring long term support for their Open Source technology deployments, we help form teams to manage the deployments. All of this with an open mind. We help our customers break their mould of limitation by helping them deploy Open Source technologies in newer areas as well.</p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Services
