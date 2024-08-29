import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
   <div className=" fixed top-0 w-[100%] h-[15vh] bg-[#0e245385] " 
   style={{fontFamily:'fantasy'}}> 
   <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
   <div className="flex">
    <div>
    <img src="DALL·E 2024-08-28 15.46.41 - A distinctive and unique logo for the brand 'KEEN AND ABLE.' The design should be modern and innovative, featuring a strong, bold font that reflects t.webp" alt="Logo_KNA.png" className="width: 106px; height: 60px; object-fit: contain; object-position: center center;" width="106" height="70"/>
     </div>
   <div className="ml-4 mt-4"> <h1 className="flex cursor-pointer text-[30px] text-white ">
      KEEN AND ABLE</h1>
    <span className="text-white">Always Been Open!</span>
     </div></div>
    <ul className="flex justify-center items-center space-x-10 text-lg text-white ">
   <Link href="#"> <li className="hover:text-white hover:underline">Home</li></Link>
   <Link href="/page"> <li className="hover:text-white hover:underline">About</li></Link>
    <li className="hover:text-white hover:underline">Services</li>
    <li className="hover:text-white hover:underline">Partners</li>
    <li className="hover:text-white hover:underline">FAQ</li>
    <li className="hover:text-white hover:underline">Blog</li>
    </ul>
   </div>
   </div>   
  )
}

export default Nav

