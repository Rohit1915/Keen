import React from 'react'

function Main() {
  return (
    <div className=" bg-[#d38d8d] mt-1 md:mt-20">
      <div className=" grid-cols-1 mx-auto grid lg:grid-cols-2">
      <div className="">
        <img className="" src="fotor-ai-2024082818012.jpg" alt="" />
      </div>
      <div className=" text-black flex flex-col h-full my-5 mx-3 md:mx-10 md:h-96 md:my-40 " style={{fontFamily:'fantasy'}}>
      <h1 className=" text-2xl md:text-3xl md:mx-40 " >
            
            MORE ABOUT KEEN AND ABLE
            </h1> 
            <span className="md:mx-40 text-xl md:text-2xl mt-4 md:mt-8 mb-5 md:mb-10" >
            Our Story
            </span>
            <div className="md:mx-40 text-xs md:text-base space-y-4">
            <p >
            Keen and Able started as a college dream in the mind of a few youngsters who just wished to have something to call their own. Open Source happened by chance. But has stuck for long. Over the years, we have dabbled in many associated Open Source technologies and successfully helped our customers adopt them.
            </p> 
            <p >
            We believe our strength lies in taking challenges head on and be of help to our customers in all areas of software deployment - architecture and planning, deployment and support. 
            </p> 
            <p >
            Being a services focused organisation, we are able to think beyond product and strive to provide our customers with solutions that help them address their business need rather than deploy a product.   
            </p>
            <p >
            We have been quite fortunate to have been able to work both in community and enterprise Open Source solution deployments. We have been living our dream of  creating people who are deft in fulfilling customer needs through Open Source means.
            </p>
             </div>
      </div>
      </div>
    </div>
  )
}

export default Main
