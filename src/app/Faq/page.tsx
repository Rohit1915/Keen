import React from 'react'
import Nav from '../Components/Nav'
import Faq from './Faq'
import Footer from '../Components/Footer'
import{ Carousel }from '../../components/ui/carousel'

function page() {
  return (
    <>
    <Nav/>
    <Faq/>
    <Carousel/>
    <Footer/>
    </>
  )
}

export default page