import React from 'react';

function Partner() {
  return (
    <div className=" bg-[#e4dcdc] lg:pt-20 pt-10 lg:mt-32 md:mt-20 mt-20">
      <div className=" grid-cols-1 mx-auto grid lg:grid-cols-2">
      <div className="my-16">
        <img className="" src="pngwing.com.png" alt="" />
      </div>
      <div tabIndex={0} className=" text-black flex flex-col h-full my-20 mx-8 md:h-full md:my-40 "style={{fontFamily:'fantasy'}}>
      <h1 className=" text-3xl md:mx-40 mb-10 text-center " >
          
           PARTNERS
           </h1>
           <p className=" md:mx-40">
             We would have never been able to reach the wider world had we not had our partners to support and work with us. Following are few of our partners we work closely with
             </p>
           <span className="md:mx-40 text-xl md:text-2xl mt-8" >
            
             TECHNOLOGY PARTNERS
           </span>
           <div className="md:mx-40" >
           <p className="mt-5">
           <b>Red Hat - </b>One of our closest and largest associates. We are lucky to have been associated with Red Hat since long and have been their go to partners for services delivery across the world
           </p>
           <p className="mt-3">
           <b>EDB -</b> Leaders in Open Source Databases. We have been working with Postgres in a lot of our customer projects
           </p>
           <h2 className="text-xl my-5">
           Global SIs
           </h2>
           <p className="my-5">
           <b>Tech Mahindra - </b>We have been working closely with Tech M on cloud orchestration and containerisation projects. We also have gotten to work many cutting technology and challenging projects with them  
           </p>
           <p className="mt-3">
           <b>Infosys -</b> Over the years, we have worked on quite a few Middleware led projects with the team. It has been a great working relationship that we have with Infosys extended teams
           </p>
           <p className="mt-3">
           <b>HCL Technologies -</b> Have been working on a variety of Automation and Containerisation projects for customers in India and around the world
           </p>
           <p className="mt-3">
           <b>Wipro -</b> Worked closely on community and enterprise Open Source engagements with the team over the years
           </p>
           <p className="mt-3">
          <b>IBM - </b> Our association with IBM amplified after their Red Hat acquisition, especially in the areas of Cloud and Containerisation
           </p>
           <p className="mt-3">
           <b>LTI -</b> Have been working for many large government of India projects with the team around containerisation and automation
           </p>
             </div>
      </div>
      </div>
    </div>
  )
}

export default Partner