import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apod from '../Pages/Apod'
import Slider from '../Component/Slider'
import Archive from '../Pages/Archive'
import Home from '../Pages/Home'
import Index from '../Pages/Index'
import Searching from '../Pages/Searching'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Apod/>} />
        <Route path='/slider' element={<Slider/>}/>
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/home/:id' element={<Home/>}/>
        <Route path='/index' element={<Index/>}/>
        <Route path='/search' element={<Searching/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes
