import React from 'react'
import styles from "../css/Footer.module.css"
import DogLogo from "./svg/DogLogo"

const Footer = () => {

  return (
    <footer>
      <div className={styles.footerContent}>
          <DogLogo fill="#666"/>
          <p>Dogs. Alguns direitos reservados</p>
      </div>
      </footer>
    
  )
}

export default Footer