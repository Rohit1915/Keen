import React from 'react'

function Touch() {
  return (
    <div className="bg-[#bfe3f1] md:pt-[2rem] pb-5 md:pb-[5rem]">
  <div className="w-[80%] grid grid-cols-1 mx-auto lg:grid-cols-2 md:mt-10 border-none gap-5 lg:gap-10">
    <div tabIndex={0} className="text-black text-center lg:text-left md:w-[60%] lg:w-[80%] flex flex-col justify-center mx-auto" style={{ fontFamily: 'fantasy' }}>
      <h2 className="my-7 text-2xl md:text-3xl lg:text-4xl">GET IN TOUCH</h2>
      <p className="text-sm md:text-lg lg:text-xl">
        We are all ears—getting to know about your business, your Open Source deployment or management problems. It would delight us if you think we can be of any help to you in your Open Source journey. You can even get in touch to say Hi or send feedback to us. As you would have guessed, we love being Open!
      </p>
      <br />
      <p className="text-sm md:text-lg lg:text-xl">
        sales@keenable.in
      </p>
    </div>
    <div className="flex justify-center lg:justify-end">
      <img src="phone.jpg" className="w-full lg:w-[80%] h-auto" alt="Get in Touch" />
    </div>
  </div>
</div>

  )
}

export default Touch
