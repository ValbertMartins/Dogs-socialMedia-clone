import React from 'react'
import styles from "../css/Header.module.css"
import { Link } from "react-router-dom"
import DogLogo from './svg/DogLogo'
import { Auth } from '../context/Auth'
const Header = () => {

  const { userAuth } = React.useContext(Auth)

  
  return (
    <header>
        <section className={`${styles.content} container`}>
          
          <Link to="/" >
              <DogLogo fill="#333"/>
          </Link>
          <Link to={userAuth ? "profile" : "login"}>
              <p className={styles.profile} style={{color: "black"}}> 
                {userAuth ? userAuth.nome : "Login / Criar" } 
              </p>
          </Link>
        </section>

    </header>
  )
}

export default Header



