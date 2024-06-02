import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import LoginPage from '../pages/LoginPage'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/login' element={<LoginPage/>} />
    </Routes>
    </>
  )
}

export default AllRoutes