import React from 'react'

function Touch() {
  return (
    <div className="bg-[#bfe3f1] md:pt-[2rem] pb-[5rem]">
    <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2  md:mt-10 border-none">
      <div className="text-black text-center md:w-[60%] justify-center" style={{fontFamily:'fantasy'}}>
        <h2 className="my-7 text-3xl">GET IN TOUCH</h2>
        <p>
        We are all ears - getting to know about your business, your Open Source deployment or management problems. It would delight us if you think we can be of any help to you in your Open Source journey. You can even get in touch to say a Hi or send a feedback to us. As you would have guessed, We love being Open!
        </p><br />
        <p>
        sales@keenable.in
        </p>
      </div>
     
       <div>
      <img src="phone.jpg" alt="" /></div> 
    </div>
    </div>
  )
}

export default Touch
