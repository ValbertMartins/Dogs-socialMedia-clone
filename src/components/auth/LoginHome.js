import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Auth } from '../../context/Auth'
import styles from "../../css/Auth.module.css"
import Login from './Login'
import LostPassword from './LostPassword'
import Register from './Register'
import ResetPassword from './ResetPassword'

const LoginHome = () => {
  const { userAuth } = React.useContext(Auth)
  const navigate = useNavigate()

  React.useEffect(() => { 
    document.title = `Login | Dogs`
  } , [])
   
  React.useEffect(() => {

    if(userAuth){
      navigate('/profile')
    }
  } , [userAuth,navigate])


  return (
    <section  className={`${styles.loginSection}`}>
        <div className={styles.outdoorContainer}>
        </div>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="lostpassword" element={<LostPassword/>}/>
          <Route path="reset" element={<ResetPassword/>}/>
        </Routes>
    </section>
  )
}

export default LoginHome