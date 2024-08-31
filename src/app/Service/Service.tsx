import React from 'react'

function Service() {
  return (
    <div className="bg-[#9db0b1] pt-[4rem] md:pt-[6rem] pb-[5rem]" style={{fontFamily:'fantasy'}}>
    <h1 className="text-center text-white text-3xl md:text-4xl">SERV<span className="text-red-600">ICES </span></h1>
    <p className="mx-5 text-center md:text-center mt-[2rem] text-base md:text-xl text-black">Openly Trying To Exceed Your Expectations</p>
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full items-center gap-[4rem] mt-[4rem] text-black">
  
          <div className="bg-[#a1b6b8]">
            <img src="sd.jpeg"
            alt="" />
            <h2 className="text-2xl mx-2 text-center mt-12">SOFTWARE ADVISORY & ARCHITECTING SERVICES</h2>
            <p  className="my-10 text-center mx-7"> Over the years, we have come across many situations where a design mistake has already been made when we are called. It is a very tough situation for a customer and we can totally empathise with it. Should the customer go ahead knowing that there is an issue due to cost, time and other considerations; or should start afresh. There is no easy answer here. But what we have realised is that the software design and architecture should be open and have a building blocks approach to make it last. Our areas of interest here are  </p>
            <ul className="mb-5 space-y-2 text-sm mx-7">
              <li>Software Design Workshops</li>
              <li>Producing Design HLD and LLD</li>
              <li>Application Modernisation Workshops</li>
              <li>Design Review and Modifications </li>
            </ul>
            <p className="my-10 mx-7 text-xl">
            Our software design practice is guided by the following principles
            </p>
            <ul className="space-y-2 mx-7 mb-10">
            <li>Discussions with all stakeholders to get a holistic view of requirements</li>
            <li>Considerations of all the affected systems to put the inter-play of components in architecture delivery</li>
            <li>Discuss possible scenarios and use cases to help sharpen the requirement gathering </li>
            <li>Help customers think beyond the immediate product/problem to help create a future ready Open Source software architecture</li>
            </ul>
          </div>
      
      
        <div className="bg-[#a1b6b8] h-full">
        <img src="sb.jpeg"
            alt="" />
            <h2 className="text-2xl mx-2 text-center mt-12">SOFTWARE BUILD & DEPLOYMENT SERVICES</h2>
            <p className="my-10 text-center mx-7"> Once the software design is ready, we have teams to help customers deploy them. We also undertake deployment of software for design done by others. We work equally Our areas of interest and delivery in this area span across</p>
            <ul className="space-y-2 mx-7 mb-10">
              <li>Linux OS and associated services</li>
              <li>Cloud and Cloud Orchestration</li>
              <li>Containers and Application Modernisation</li>
              <li>Lift and Shift legacy Applications to containers</li>
              <li>Open Source DBs and NoSQL DBs</li>
              <li>Process Automation on Open Source</li>
              <li>Red Hat Middleware product suite</li>
              <li>Using Open Source tools to set up alerting and monitoring dashboards</li>
              <li>Bespoke software development using Open Source software and tools</li>
            </ul>
            </div>
            

      <div className="bg-[#a1b6b8] h-full">
      <img src="ms.jpeg"
            alt="" /> 
             <h2 className="text-2xl mx-2 text-center mt-12">MONITORING & SUPPORT SERVICES</h2>
            <p className="my-10 text-center mx-7"> Customers might need additional support after deployments or even monitoring of their critical systems to maintain uptime. Various teams need to be aware of actions required to be taken if any component is not functioning. This requires monitoring of deployments right from hardware level to the application and everything in between. We provide these services to our customers. Some of the areas we address are</p>
            <ul className="space-y-2 mx-7 mb-10">
              <li>24X7 monitoring</li>
              <li>Creating dynamic information dashboards</li>
              <li>Rule based monitoring</li>
              <li>Log Management</li>
              <li>Automated Inventory Discovery</li>
              <li>Automating monitoring workflows</li>
              <li>Manpower support for operations</li>
              <li>Day 2 support and CR handling</li>
              <li>Creating Policies for monitoring</li>
            </ul>
      </div>
    </div>
  </div>
  )
}

export default Service