import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div>
    <div className=" bg-[#ebc3c3]">
      <div className=" grid-cols-1 mx-auto grid lg:grid-cols-2">
      <div className="">
        <Image src="" alt="" />
      </div>
      <div className=" text-black flex flex-col h-full my-20 mx-10 md:h-96 md:my-40 " style={{fontFamily:'fantasy'}}>
      <h1 className=" text-3xl md:mx-40 ">
            
             OUR BACKGROUND
            </h1> 
            <span className="md:mx-40 text-2xl mt-8">
            How We Got Here
            </span>
            <div className="md:mx-40" >
            <p className="mt-10">
            Trying to reach out for the unachievable and what lies beyond us has brought us where we are today. Be it our first Linux cluster for SAP deployment in 2002, or our first deployment for Red Hat's integration suite Fuse in 2012 or for that matter our first Openstack deployment in 2015.
            </p> 
            <p className="mt-8">
            We never knew beforehand any of those areas when we set out to deliver. What kept us going and ultimately delivering was a focus to be able to of help to our customers and complete what we had started.
            </p> 
            <p className="my-8">
            That same zest continues today when we pick up today's challenges of low code-no code, AI, Optaplanner etc. And we hope we are able to always aim for goals outside our reach with the will to achieve what we aim for.  
            </p>
             </div>
      </div>
      </div>
    </div>  
      
    </div>
  );
}

export default About;
