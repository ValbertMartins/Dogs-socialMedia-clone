import React from 'react'
import { NavLink } from 'react-router-dom'
import MyPicturesIcon from '../../svg/MyPicturesIcon'
import StatisticsIcon from '../../svg/StatisticsIcon'
import CreateIcon from '../../svg/CreateIcon'
import LeaveIcon from '../../svg/LeaveIcon'

const NavigateButtons = ({
    setProfileActiveIcon, 
    setTitle , 
    setUserAuth, 
    setValidatedToken, 
    setLocalToken, 
    profileActiveIcon}
) => {
  return (
    <>
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
            onClick={() => setTitle('Poste Sua Foto')}>
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
    </>
  )
}
export default NavigateButtons