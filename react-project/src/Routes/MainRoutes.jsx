import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apod from '../Pages/Apod'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Apod/>} />
      </Routes>
    </>
  )
}

export default MainRoutes
