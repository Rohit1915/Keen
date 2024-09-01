import React from 'react'

function Main() {
  return (
    <div className="bg-[#E0E0E0]">
  <div className="grid grid-cols-1 mx-auto lg:grid-cols-2">
    <div className="lg:col-span-1">
      <img className="w-full h-auto" src="fotor-ai-2024082818012.jpg" alt="Keen and Able" />
    </div>
    <div className="relative h-[80%] my-16 mx-5 md:mx-8 md:my-12 lg:my-20 lg:mx-16" style={{ fontFamily: 'fantasy' }}>
  <img 
    src="tt.jpg" 
    alt="" 
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="relative text-black z-10 flex flex-col justify-center h-full p-4">
    <h1 className="text-2xl md:text-3xl lg:text-4xl lg:mx-20">
      MORE ABOUT KEEN AND ABLE
    </h1>
    <span className="text-xl md:text-2xl mt-4 md:mt-8 mb-5 md:mb-10 lg:text-3xl lg:mx-20">
      Our Story
    </span>
    <div className="text-sm md:text-lg lg:text-xl space-y-4 lg:mx-20">
      <p>
        Keen and Able started as a college dream in the mind of a few youngsters who just wished to have something to call their own. Open Source happened by chance but has stuck for long. Over the years, we have dabbled in many associated Open Source technologies and successfully helped our customers adopt them.
      </p>
      <p>
        We believe our strength lies in taking challenges head on and being of help to our customers in all areas of software deployment - architecture and planning, deployment, and support.
      </p>
      <p>
        Being a services-focused organization, we are able to think beyond product and strive to provide our customers with solutions that help them address their business needs rather than deploy a product.
      </p>
      <p>
        We have been quite fortunate to have been able to work both in community and enterprise Open Source solution deployments. We have been living our dream of creating people who are deft in fulfilling customer needs through Open Source means.
      </p>
    </div> 
  </div>
</div>

    </div>
  </div>

  )
}

export default Main
