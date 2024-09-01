import React from 'react'

function Services() {
  return (
    <div className="bg-[#eef5f5] pt-[4rem] md:pt-[6rem] pb-5 md:pb-[5rem]" style={{ fontFamily: 'fantasy' }}>
  <h1 tabIndex={0} className="text-center text-black text-[28px] sm:text-[33px] md:text-3xl lg:text-4xl font-bold uppercase">
    OUR <span className="text-yellow-600">SERVICES</span>
  </h1>
  <p className="mx-5 text-center mt-[2rem] text-base md:text-xl lg:text-2xl text-black">
    Here’s What We Think We Provide Today. And We Have Always Been Open To New Areas.
  </p>
  
  <div className="w-[80%] grid mx-auto lg:grid-cols-2 mt-[5%] border-none gap-5 lg:gap-10">
    <img className="h-[350px] w-full lg:h-[400px] lg:w-auto hidden md:block" src="aerial-view-business-team.jpg" alt="Business Team" />
    <img className="h-auto w-full lg:h-[400px]" src="plant.png" alt="Plant" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-center gap-5 md:gap-[4rem] lg:gap-[2rem] mt-5 md:mt-[4rem] text-black">
    <div>
      <div tabIndex={0} className="bg-slate-400 md:bg-[#ddafa7] md:hover:scale-110 transform transition-all duration-300 hover:-rotate-10 text-center p-[1rem] lg:h-[28rem]">
        <h2 className="text-xl lg:text-2xl">ARCHITECTING</h2>
        <img src="aac.jpeg" className="h-[8rem] md:h-[10rem] lg:h-[12rem] mx-auto mt-4 lg:mt-6" alt="Architecting" />
        <p className="text-sm md:text-base lg:text-lg mt-4 lg:mt-6">
          A well thought out architecture helps our customers be in control of their deployments long after we complete our work. With our experience of working with varied customer scenarios across the world, we provide software architecting services to help design the software keeping the bigger picture in mind.
        </p>
      </div>
    </div>

    <div>
      <div tabIndex={0} className="bg-slate-400 md:bg-[#ddafa7] md:hover:scale-110 transform transition-all duration-300 hover:-rotate-10 md:h-[25.5rem] lg:h-[28rem] text-center p-[1rem]">
        <h2 className="text-xl lg:text-2xl">DEPLOYMENT</h2>
        <img src="ggg.jpeg" className="h-[8rem] md:h-[10rem] lg:h-[12rem] mx-auto mt-4 lg:mt-6" alt="Deployment" />
        <p className="text-sm md:text-base lg:text-lg mt-4 lg:mt-6">
          We provide deployment services for almost any technology in the Open Source realm. This list has been ever-growing over the years. Our motto is simple - if we do not know it, we learn it. After all, we have always been Open! We are always willing to walk the path with our customers on their Open Source deployment journey.
        </p>
      </div>
    </div>

    <div>
      <div tabIndex={0} className="bg-slate-400 md:bg-[#ddafa7] md:hover:scale-110 transform transition-all duration-300 hover:-rotate-10 md:h-[24rem] lg:h-[28rem] text-center p-[1rem]">
        <h2 className="text-xl lg:text-2xl">SUPPORT</h2>
        <img src="eee.jpeg" className="h-[8rem] md:h-[10rem] lg:h-[12rem] mx-auto mt-4 lg:mt-6" alt="Support" />
        <p className="text-sm md:text-base lg:text-lg mt-4 lg:mt-6">
          For customers requiring long-term support for their Open Source technology deployments, we help form teams to manage the deployments. All of this with an open mind. We help our customers break their mould of limitation by helping them deploy Open Source technologies in newer areas as well.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Services
