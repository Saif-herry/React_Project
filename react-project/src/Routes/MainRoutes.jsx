import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apod from '../Pages/Apod'
import Slider from '../Component/Slider'
import Archive from '../Pages/Archive'
import Home from '../Pages/Home'
import Index from '../Pages/Index'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Apod/>} />
        <Route path='/slider' element={<Slider/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/home/:id' element={<Home/>}/>
        <Route path='/index' element={<Index/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes
