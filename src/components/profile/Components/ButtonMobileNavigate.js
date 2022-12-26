import React from 'react'
import styles from "../../../css/ButtonMobile.module.css"
import NavigateButtons from './NavigateButtons'


const fieldsText = {
  myPosts: "Minhas fotos",
  statistics: "Estatísticas",
  create: "Adicionar Foto",
  leave: "Sair"
}

const ButtonMobileNavigate = ({setTitle}) => {

  const [ activeButtonMobile , setActiveButtonMobile ] = React.useState(false)

  function handleButtonMobile() {
    setActiveButtonMobile(!activeButtonMobile)
  }

  return (

    <section className={styles.btnMobileContainer}>
      <button 
        className={`${styles.buttonMobile} 
          ${activeButtonMobile && styles.buttonMobileActive}`} 
        onClick={handleButtonMobile}>
          
        <span className={ `${styles.hamburguer} 
          ${activeButtonMobile && styles.hamburguerAnimated}`}> 
        </span>
      </button>

      {
        activeButtonMobile && 
          <div className={`${styles.navigateLinks}`}>
            <NavigateButtons
              {...{setTitle , 
                fieldsText
              }}
            />
          </div>
      }
    </section>

      
  )
}

export default ButtonMobileNavigate