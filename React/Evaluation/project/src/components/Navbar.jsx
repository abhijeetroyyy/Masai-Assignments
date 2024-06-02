import React from 'react'
import AllRoutes from './AllRoutes'
import {Link , Route ,Router} from "react-router-dom"
import { Flex, Spacer } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <>
    <Flex align="center" justify="space-around" bg="tomato" p={5}>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/login">Login</Link>
    </Flex>
      
    </>
  )
}

export default Navbar