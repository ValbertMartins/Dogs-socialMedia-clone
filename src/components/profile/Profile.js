import React from 'react'
import styles from "../../css/Profile.module.css"
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import MyPicturesIcon from '../svg/MyPicturesIcon'
import StatisticsIcon from '../svg/StatisticsIcon'
import CreateIcon from '../svg/CreateIcon'
import LeaveIcon from '../svg/LeaveIcon'
import Statistics from './Components/Statistics'
import Create from "./Components/Create"
import { GlobalState } from '../../context/GlobalState'
import MyPosts from './Components/MyPosts'

const Profile = () => {

  const [ title , setTitle ] = React.useState('Minha Conta')
  
  const { 
    userAuth,
    setUserAuth,   
    localToken , 
    setLocalToken, 
    setValidatedToken
  } = React.useContext(GlobalState)
  
  const [ profileActiveIcon , setProfileActiveIcon] = React.useState(true)
  const navigate = useNavigate()
  

  //test if token exists
  React.useEffect(() => {
    if(!localToken) {
      return navigate('/login')
    }
  }, [])

  
  React.useEffect(() => {

    if(userAuth === false){
      navigate('/login')
    }
  }, [userAuth])
  

  
  return (


    <section className={styles.containerProfile}>
      
      <h1 className={styles.title}>{title}</h1>

      <article className={styles.navigateButtonsContainer}>

        <NavLink to="" 
          onClick={() => {
            setProfileActiveIcon(true)
            setTitle('Minha Conta')
           
          }} 
          className={ (e) => profileActiveIcon ? "active" : "inactive"}>
          <MyPicturesIcon/>
        </NavLink>

        <NavLink to="statistics"  
          onClick={() => {
          setProfileActiveIcon(false)
          setTitle('Estatísticas')
          }}>
        
          
          <StatisticsIcon/>
        </NavLink>

        <NavLink 
          to="create" 
          onClick={() => setTitle('Poste sua Foto')}>
          <CreateIcon/>
        </NavLink >

        <NavLink to="/login" 
          onClick={() => {
          setUserAuth(null)
          setValidatedToken(false)
          setLocalToken(localStorage.removeItem('token'))
        }}>
          <LeaveIcon/>
          
        </NavLink>

      </article>

      <Routes>
          <Route 
            path=""
            element={<MyPosts userId={userAuth?.id} localToken={localToken}/>}
            />
          <Route 
            path='statistics' 
            element={<Statistics/>}/>
          <Route 
            path='create' 
            element={<Create/>}/>
      </Routes>
    </section>
  )
}

export default Profile