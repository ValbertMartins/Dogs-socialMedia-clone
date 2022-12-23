import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../css/Auth.module.css"
const LoginRouteLinks = () => {
  return (
    <>
      <div>
        <Link to="lostpassword">
            <span className={styles.passwordLostLink}>Perdeu a senha?</span>
        </Link> 
      </div>
      <div className={styles.registerContainer}>
        <h2 className={styles.subtitle}>
          Cadastre-se
        </h2>
        <p>
            Ainda não tem uma conta? Cadastre-se.
        </p>
        <Link to="register">
            <button className="defaultBtn">Cadastro</button>
        </Link>
      </div>  
    </>
  )
}

export default LoginRouteLinks