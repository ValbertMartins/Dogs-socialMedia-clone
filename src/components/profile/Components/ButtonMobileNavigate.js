import React from 'react'
import styles from "../../../css/ButtonMobile.module.css"
import NavigateButtons from './NavigateButtons'


const fieldsText = {
  myPosts: "Minhas fotos",
  statistics: "Estatísticas",
  create: "Adicionar Foto",
  leave: "Sair"
}
const ButtonMobileNavigate = ({ 
  setTitle , 
  setUserAuth, 
  setValidatedToken, 
  setLocalToken}) => {

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
          <div className={`${styles.navigateLinks}`}>
            <NavigateButtons
              {...{setTitle , 
                setUserAuth, 
                setValidatedToken, 
                setLocalToken,
                fieldsText
              }}
            />
          </div>
      }
    </section>

      
  )
}

export default ButtonMobileNavigate