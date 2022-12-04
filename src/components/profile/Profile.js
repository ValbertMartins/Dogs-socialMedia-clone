import React from 'react'
import styles from "../../css/Profile.module.css"
import { NavLink, Route, Routes } from 'react-router-dom'
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

  const [localToken , setLocalToken ] = useLocalStorage()
  const { userInfo, setUserInfo } = React.useContext(GlobalState)


  console.log(userInfo)
  return (


    <section className={styles.containerProfile}>
      
      <h1 className={styles.title}>{title}</h1>

      <article className={styles.navigateButtonsContainer}>

        <NavLink to="" onClick={() => setTitle('Minha Conta')} >
          <MyPicturesIcon/>
        </NavLink>

        <NavLink to="statistics" onClick={() => setTitle('Estatísticas')}>
          <StatisticsIcon/>
        </NavLink>

        <NavLink to="create" onClick={() => setTitle('Criar')}>
          <CreateIcon/>
        </NavLink >

        <NavLink to="/login" onClick={() => {
          
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