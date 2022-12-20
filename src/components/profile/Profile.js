import React from 'react'
import styles from "../../css/Profile.module.css"
import {Route, Routes, useNavigate } from 'react-router-dom'

import Statistics from './Components/Statistics'
import Create from "./Components/Create"
import { Auth } from '../../context/Auth'
import MyPosts from './Components/MyPosts'
import { ModalProvider } from '../../context/ModalState'
import Modal from "../../components/feed/Modal"
import NavigateButtons from './Components/NavigateButtons'
import ButtonMobileNavigate from './Components/ButtonMobileNavigate'

const Profile = () => {

  const [ title , setTitle ] = React.useState('Minha Conta')
  
  const { 
    userAuth,
    setUserAuth,   
    localToken , 
    setLocalToken, 
    setValidatedToken
  } = React.useContext(Auth)
  
  React.useEffect(() => { 
    document.title = `Profile | Dogs`
  } , [])
  
  const [ profileActiveIcon , setProfileActiveIcon] = React.useState(true)
  const [ activeModal, setActiveModal ] = React.useState(false)
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
  
  
  const [ widthWindow , setWidthWindow ] = React.useState(window.innerWidth)
  React.useEffect(() => {
    
    window.addEventListener("resize", () => {
      setWidthWindow(window.innerWidth)

    })
    
    
  }, [])



  
  
  return (

  <ModalProvider>
    <section className={styles.containerProfile}>

      <div className={styles.dashboardContainer}>
        <h1 className={styles.title}>{title}</h1>

      {
        widthWindow < 640 ? 
          <ButtonMobileNavigate
            setProfileActiveIcon={setProfileActiveIcon}
            setTitle={setTitle}
            setUserAuth={setUserAuth}
            setValidatedToken={setValidatedToken}
            setLocalToken={setLocalToken}
            profileActiveIcon={profileActiveIcon}
            
          /> : 
          <article className={styles.navigateButtonsContainer}>
            <NavigateButtons 
              setProfileActiveIcon={setProfileActiveIcon}
              setTitle={setTitle}
              setUserAuth={setUserAuth}
              setValidatedToken={setValidatedToken}
              setLocalToken={setLocalToken}
              profileActiveIcon={profileActiveIcon}
              />
          </article>

      }        
      </div>

      <Routes>
          <Route 
            path=""
            element={<MyPosts userId={userAuth?.id} localToken={localToken} 
              setActiveModal={setActiveModal}/>}
            />
          <Route 
            path='statistics' 
            element={<Statistics setActiveModal={setActiveModal}/>}/>
          <Route 
            path='create' 
            element={<Create/>}/>
      </Routes>


    {
      activeModal &&              
        <Modal setActiveModal={setActiveModal}/>
    }
    </section>
  </ModalProvider>
  )
}

export default Profile