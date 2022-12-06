import React from 'react'
import styles from "../../css/Profile.module.css"
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import MyPicturesIcon from '../svg/MyPicturesIcon'
import StatisticsIcon from '../svg/StatisticsIcon'
import CreateIcon from '../svg/CreateIcon'
import LeaveIcon from '../svg/LeaveIcon'
import Statistics from './Components/Statistics'
import Create from "./Components/Create"
import useLocalStorage from '../../hooks/useLocalStorage'
import { GlobalState } from '../../context/GlobalState'

const Profile = () => {

  const [ title , setTitle ] = React.useState('Minha conta')
  const [ activeRoute , setActiveRoute ] = React.useState()
  const [ localToken , setLocalToken ] = useLocalStorage()
  const { userInfo, setUserInfo ,fetchApi } = React.useContext(GlobalState)
  const navigate = useNavigate()
  

  //test if token exists
  React.useEffect(() => {
    if(!localToken) {
      return navigate('/login')
    }
  }, [])


  
  //validate token
  React.useEffect(() => {
    
    (async () => {
        const [ payload ] = await fetchApi(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate`, {
          method: "POST", 
          headers: {"Content-type": "application/json", authorization: `Bearer ${localToken}`}
        })        
        if(!payload.data.status) return navigate('/login')
  
      })()
  } , [])

  React.useEffect(() => {
    
  }, [])


  return (


    <section className={styles.containerProfile}>
      
      <h1 className={styles.title}>{title}</h1>

      <article className={styles.navigateButtonsContainer}>

        <NavLink to="" onClick={() => setTitle('Minha Conta')}>
          <MyPicturesIcon/>
        </NavLink>

        <NavLink to="statistics" onClick={() => setTitle('Estatísticas')}>
          <StatisticsIcon/>
        </NavLink>

        <NavLink to="create" onClick={() => setTitle('Poste sua Foto')}>
          <CreateIcon/>
        </NavLink >

        <NavLink to="/login" onClick={() => {
          setUserInfo(null)
          setLocalToken(localStorage.removeItem('token'))
        }}>
          <LeaveIcon/>
          
        </NavLink>

      </article>


      <Routes>
          <Route path='statistics' element={<Statistics/>}/>
          <Route path='create' element={<Create/>}/>
      </Routes>
    </section>
  )
}

export default Profile