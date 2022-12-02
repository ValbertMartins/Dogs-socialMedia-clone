import React from 'react'
import styles from "../css/Header.module.css"
import { Link } from "react-router-dom"
import DogLogo from './svg/DogLogo'
const Header = () => {
  return (
    <header>
        <section className={`${styles.content} container`}>
                <Link to="/">
                   <DogLogo fill="#333"/>
                </Link>
                <Link to="login">
                    <p className={styles.profile}>Login / Criar</p>
                </Link>
        </section>

    </header>
  )
}

export default Header