import React from 'react'
import styles from "../../css/Profile.module.css"
import {Route, Routes, useNavigate } from 'react-router-dom'
import Statistics from './Components/Statistics'
import Create from "./Components/Create"
import { Auth } from '../../context/Auth'
import MyPosts from './Components/MyPosts'
import Modal from "../../components/feed/Modal"
import ProfileHeader from './Components/ProfileHeader'

const Profile = () => {
  React.useEffect(() => { 
    document.title = `Profile | Dogs`
  } , [])


  const [ title , setTitle ] = React.useState('Minha Conta')
  const { userAuth , localToken} = React.useContext(Auth)
  const [ idModal , setIdModal ] = React.useState(null)
  const navigate = useNavigate()
  
  //test if token exists
  React.useEffect(() => {
    if(!localToken) {
      return navigate('/login')
    }
  }, [localToken,navigate])

  React.useEffect(() => {

    if(userAuth === false){
      navigate('/login')
    }
  }, [userAuth,navigate])
  

  return (
    <section className={styles.containerProfile}>
      <ProfileHeader setTitle={setTitle} title={title}/>

      <Routes>
        <Route path="" element={<MyPosts setIdModal={setIdModal}/>}/> 
        <Route path='statistics' element={<Statistics/>}/>
        <Route path='create' element={<Create/>}/>
      </Routes>

      {
        idModal &&              
          <Modal setIdModal={setIdModal} idModal={idModal} />
      }
    </section>
  )
}

export default Profile