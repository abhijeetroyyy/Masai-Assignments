import React from 'react'
import {Box,Heading} from "@chakra-ui/react"
import HeroSection from './contacts/HeroSection'
// import ContactForm from './contacts/ContactForm'
import ContactInfo from './contacts/ContactInfo'
import Footer from './contacts/Footer'
const Contact = () => {
  return (
    <>
      <HeroSection/>
      {/* <ContactForm/> */}
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default Contact