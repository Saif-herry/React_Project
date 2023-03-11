import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apod from '../Pages/Apod'
import Slider from '../Component/Slider'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Apod/>} />
        <Route path='/slider' element={<Slider/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes
