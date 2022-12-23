import React from 'react'
import { NavLink } from 'react-router-dom'
import MyPicturesIcon from '../../svg/MyPicturesIcon'
import StatisticsIcon from '../../svg/StatisticsIcon'
import CreateIcon from '../../svg/CreateIcon'
import LeaveIcon from '../../svg/LeaveIcon'

const NavigateButtons = ({ 
    setTitle , 
    setUserAuth, 
    setValidatedToken, 
    setLocalToken,
    fieldsText
}) => {

  function handlerTitle(title){
    setTitle(title)
  }

  function logout(){
    setUserAuth(null)
    setValidatedToken(false)
    setLocalToken(localStorage.removeItem('token'))
  }
  return (
    <>
       <NavLink to="" 
          end
          onClick={() => handlerTitle("Minha Conta")}>
          <MyPicturesIcon/>
          {fieldsText?.myPosts}  
        </NavLink>

        <NavLink to="statistics"  
          onClick={() => handlerTitle("Estatísticas")}>
          <StatisticsIcon/>
          {fieldsText?.statistics}
        </NavLink>

        <NavLink 
          to="create" 
          onClick={() => handlerTitle('Poste Sua Foto')}>
          <CreateIcon/>
          {fieldsText?.create}
        </NavLink >

        <NavLink to="/login" 
          onClick={() => logout()}>
          <LeaveIcon/>
          {fieldsText?.leave}
        </NavLink>
    </>
  )
}
export default NavigateButtons