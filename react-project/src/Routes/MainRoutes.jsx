import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apod from '../Pages/Apod'
import Slider from '../Component/Slider'
import Archive from '../Pages/Archive'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Apod/>} />
        <Route path='/slider' element={<Slider/>}/>
        <Route path='/archive' element={<Archive/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes
