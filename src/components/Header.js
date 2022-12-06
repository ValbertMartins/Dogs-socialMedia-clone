import React from 'react'
import styles from "../css/Header.module.css"
import { Link } from "react-router-dom"
import DogLogo from './svg/DogLogo'
import { GlobalState } from '../context/GlobalState'
const Header = () => {

  const { userInfo } = React.useContext(GlobalState)

  
  

  return (
    <header>
        <section className={`${styles.content} container`}>
                <Link to="/" >
                   <DogLogo fill="#333"/>
                </Link>
                <Link to={userInfo ? "profile" : "login"}>
                    <p className={styles.profile} style={{color: "black"}}> 
                      {userInfo ? userInfo.user_display_name : "Login / Criar" } 
                    </p>
                </Link>
        </section>

    </header>
  )
}

export default Header



