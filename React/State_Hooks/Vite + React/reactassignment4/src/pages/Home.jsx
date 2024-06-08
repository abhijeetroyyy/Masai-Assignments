import React from 'react'
import  {Box,Button,Heading, useToast} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import HeroSection from './home/HeroSection';
import HowWeHelp from './home/HowWeHelp';
import TrustedBrands from './home/TrustedBrands';
import AboutUs from './home/AboutUs';
import HowItWorks from './home/HowItWorks';
import Testimonials from './home/Testimonials';
import FAQ from './home/FAQ';
import LatestNews from './home/LatestNews';
import NextStep from './home/NextStep';

const Home = () => {
  return (
    <>
   <HeroSection/>
   <HowWeHelp/>
    <TrustedBrands/>
    <NextStep/>
    <AboutUs/>
    <HowItWorks/>
    <Testimonials/>
    <FAQ/>
    <LatestNews/>
    </>

  )
}

export default Home;