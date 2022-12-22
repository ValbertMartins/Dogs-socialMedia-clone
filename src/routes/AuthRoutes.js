import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login'
import LostPassword from '../components/auth/LostPassword'
import Register from '../components/auth/Register'
import ResetPassword from '../components/auth/ResetPassword'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="lostpassword" element={<LostPassword/>}/>
      <Route path="reset" element={<ResetPassword/>}/>
    </Routes>
  )
}

export default AuthRoutes