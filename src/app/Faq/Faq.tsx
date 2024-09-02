import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Faq() {
  return (
    <div className="relative md:p-16 lg:pt-52 md:pt-40 p-10 pt-32 px-8 lg:mt-32 md:mt-20 mt-20">
      <video 
        src="mkm.mp4" 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />
      <div className="relative z-10"  style={{ fontFamily: "fantasy" }}>
        <Carousel className="mx-4 md:mx-24 lg:mx-96">
          <CarouselContent>
            <CarouselItem>
              <div className="relative">
                <img 
                  src="op.jpeg" 
                  className="h-[20rem] md:h-[30rem] lg:h-[40rem] w-full object-cover opacity-90" 
                  alt="" 
                />
                <div className="absolute inset-0 w-[97%] h-[80%] md:w-[80%] my-8 md:h-[60%] lg:w-[70%] lg:h-[70%] m-4 md:mx-18 md:my-24 lg:my-24 mx-auto bg-black opacity-90 lg:mx-36">
                  <h1 className="text-base md:text-lg lg:text-4xl text-center my-4 md:my-6 lg:my-8 text-white">
                    WHAT IF I AM NOT SATISFIED WITH KEEN AND ABLE?
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-center md:mx-5 lg:mx-20 text-white">
                    In our more than 25 year history, there have, of course, been the rare cases of customer expectations not matching with our delivery. In such a scenario, we make all effort to deliver what the customer wants. Ultimately, the idea of Open is being open to criticism and new learning.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className="relative">
                <img 
                  src="mn.jpeg" 
                  className="h-[20rem] md:h-[30rem] lg:h-[40rem] w-full object-cover opacity-80" 
                  alt="" 
                />
                <div className="absolute inset-0 w-[97%] h-[80%] md:w-[80%] my-8 md:h-[60%] lg:w-[70%] lg:h-[70%] m-4 md:mx-18 md:my-24 lg:my-24 mx-auto bg-[#212324] opacity-90 lg:mx-36">
                  <h1 className="text-base md:text-lg lg:text-4xl text-center my-4 md:my-6 lg:my-8 text-white">
                  CAN I DEPLOY OPEN SOURCE SOFTWARE MYSELF?
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-center md:mx- lg:mx-14 text-white">
                  Of course! If you have spare time then you seriously you do not need us. That is the whole beauty of Open Source. Our only value add is that we help deliver your job while you concentrate on your business. Additionally, with our service bouquet, we can bring in some best practices that we have learnt the hard way over the years, some nuggets of hacks for your teams and of course manpower to help share your workload.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem >
            <div className="relative">
                <img 
                  src="qw.jpeg" 
                  className="h-[20rem] md:h-[30rem] lg:h-[40rem] w-full object-cover opacity-80" 
                  alt="" 
                />
                <div className="absolute inset-0 w-[97%] h-[80%] md:w-[80%] my-8 md:h-[60%] lg:w-[70%] lg:h-[70%] m-4 md:mx-18 md:my-24 lg:my-24 mx-auto bg-black opacity-90 lg:mx-36">
                  <h1 className="text-base md:text-lg lg:text-4xl text-center my-4 md:my-6 lg:my-8 text-white">
                   WHAT IF I DEPLOY MYSELF AND FACE CHALLENGE LATER?
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-center md:mx-5 lg:mx-20 text-white">
                  We are available to help in all phases of your Open Source journey. We would definitely like to sit with you and discuss your aspirations and business goals before we engage but dont worry. We have your backs covered.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <img 
                  src="sand.jpeg" 
                  className="h-[20rem] md:h-[30rem] lg:h-[40rem] w-full object-cover opacity-80" 
                  alt="" 
                />
                <div className="absolute inset-0 w-[97%] h-[80%] md:w-[80%] my-8 md:h-[60%] lg:w-[70%] lg:h-[70%] m-4 md:mx-18 md:my-24 lg:my-24 mx-auto bg-[#d6cc71] opacity-90 lg:mx-36">
                  <h1 className="text-base md:text-lg lg:text-4xl text-center my-4 md:my-6 lg:my-8 text-black">
                  IS OPEN SOURCE SUSTAINABLE?
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-center md:mx-5 lg:mx-20 text-black">
                  When properly deployed, Open Source can help bring in flexibility and agility. It is also easier to incorporate unplanned or unforeseen future changes - in either technology or roadmaps. 
                  </p>
                </div>
              </div>
              </CarouselItem>
            <CarouselItem>
            <div className="relative">
                <img 
                  src="fg.png" 
                  className="h-[20rem] md:h-[30rem] lg:h-[40rem] w-full object-cover opacity-80" 
                  alt="" 
                />
                <div className="absolute inset-0 w-[97%] h-[80%] md:w-[80%] my-8 md:h-[60%] lg:w-[70%] lg:h-[70%] m-4 md:mx-18 md:my-24 lg:my-24 mx-auto bg-[#232627] opacity-90 lg:mx-36">
                  <h1 className="text-base md:text-lg lg:text-4xl text-center my-4 md:my-6 lg:my-8 text-white">
                  WHO WILL SUPPORT MY OPEN SOURCE DEPLOYMENT IF KNA IS NOT AVAILABLE TOMORROW?
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-center md:mx-5 lg:mx-20 text-white">
                  Ideally, the best way forward is to develop and maintain your own small team of resources to take care of day-to-day tasks and CRs. 100% dependence on external resources is not recommended.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className="relative">
                <img 
                  src="ml.png" 
                  className="h-[20rem] md:h-[30rem] lg:h-[40rem] w-full object-cover" 
                  alt="" 
                />
                <div className="absolute inset-0 w-[97%] h-[80%] md:w-[80%] my-8 md:h-[60%] lg:w-[70%] lg:h-[70%] m-4 md:mx-18 md:my-24 lg:my-24 mx-auto bg-[#212324] opacity-90 lg:mx-36">
                  <h1 className="text-base md:text-lg lg:text-4xl text-center my-4 md:my-6 lg:my-8 text-white">
                  ARE OPEN SOURCE DEPLOYMENTS COMPLEX?
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-center md:mx-5 lg:mx-20 text-white">
                  With such a lot of help available on net and large enterprises having already adopting Open Source, this does not hold true any longer. It depends on your perception. If having a building block approach with customizable options as per your choice bothers you as compared to deploying a proprietary and non-flexible code, then you might like to choose closed source software.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className="relative">
                <img 
                  src="yh.png" 
                  className="h-[20rem] md:h-[30rem] lg:h-[40rem] w-full object-cover" 
                  alt="" 
                />
                <div className="absolute inset-0 w-[97%] h-[80%] md:w-[80%] my-8 md:h-[60%] lg:w-[70%] lg:h-[70%] m-4 md:mx-18 md:my-24 lg:my-24 mx-auto bg-[#1e2020] opacity-90 lg:mx-36">
                  <h1 className="text-base md:text-lg lg:text-4xl text-center my-4 md:my-6 lg:my-8 text-white">
                  I AM IN A FIX. I DO NOT KNOW WHAT TO DO
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-center md:mx-5 lg:mx-20 text-white">
                  Open Source adoption is a journey. We understand that customers sometimes are unsure about taking the first step. We provide advisory services to estimate your readiness to adopt Open Source as well as explore the available options commensurate with your business needs. It always helps to seek Open!
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
        className='lg:w-16 lg:h-16 lg:ml-16 md:ml-16 text-3xl bg-red-500 lg:bg-slate-400 md:lg:bg-slate-400 hover:bg-orange-600 flex items-center justify-center rounded-full'
        />
        <CarouselNext
       className='lg:w-16 lg:h-16 lg:mr-16 md:mr-16 text-3xl bg-red-500 lg:bg-slate-400 md:lg:bg-slate-400 hover:bg-orange-600 flex items-center justify-center rounded-full'
         />

        </Carousel>
      </div>
    </div>
  );
}

export default Faq;
