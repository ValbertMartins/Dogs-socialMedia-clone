import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../../../css/ButtonMobile.module.css"
import MyPicturesIcon from '../../svg/MyPicturesIcon'
import StatisticsIcon from '../../svg/StatisticsIcon'
import CreateIcon from '../../svg/CreateIcon'
import LeaveIcon from '../../svg/LeaveIcon'

const ButtonMobileNavigate = ({setProfileActiveIcon, 
  setTitle , 
  setUserAuth, 
  setValidatedToken, 
  setLocalToken, 
  profileActiveIcon}) => {

  const [ activeButtonMobile , setActiveButtonMobile ] = React.useState(false)



  function handleButtonMobile() {
    setActiveButtonMobile(!activeButtonMobile)
  }
  return (

    <section className={styles.btnMobileContainer}>

      <div 
        className={`${styles.buttonMobile} ${activeButtonMobile && styles.buttonMobileActive}`} 
        onClick={handleButtonMobile}>

        <span className={ `${styles.hamburguer} ${activeButtonMobile && styles.hamburguerAnimated}`}> 
        </span>
      </div>

      {
        activeButtonMobile && 
          <div className={`${styles.navigateLinks}`}
            onClick={() => setActiveButtonMobile(!activeButtonMobile)}
          >
            <NavLink to="" 
              onClick={() => {
                setProfileActiveIcon(true)
                setTitle('Minha Conta')   
              }} 
              className={ (e) => profileActiveIcon ? "active" : "inactive"}>
              <MyPicturesIcon/>
              Minhas fotos
            </NavLink>

            <NavLink to="statistics"  
              onClick={() => {
                setProfileActiveIcon(false)
                setTitle('Estatísticas')
              }}>
              <StatisticsIcon/>
              Estatísticas
            </NavLink>

            <NavLink 
              to="create" 
              onClick={() => setTitle('Poste Sua Foto')}>
              <CreateIcon/>
              Adicionar foto
            </NavLink >

            <NavLink to="/login" 
              onClick={() => {
                setUserAuth(null)
                setValidatedToken(false)
                setLocalToken(localStorage.removeItem('token'))
              }}>
              <LeaveIcon/>
              Sair
            </NavLink>
          </div>
      }
    </section>

      
  )
}

export default ButtonMobileNavigate