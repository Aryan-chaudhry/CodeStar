import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/profile' element={ <Profile/> }/>
        <Route path='/Signup' element={ <Signup/> }/>
        <Route path='/Login' element={ <Login/> }/>
    </Routes>
  )
}

export default AppRoutes;
