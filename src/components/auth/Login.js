import React from 'react'
import styles from "../../css/Auth.module.css"
import Input from './Input'
const Login = () => {
  return (
    <section className={`${styles.loginSection}`}>
      <div className={styles.outdoorContainer}>
        
      </div>
      <div className={styles.formContainer}>
         <h1 className={styles.title}>Login</h1>
         <form>
          <Input name="Usuário" type="text" className="inputForm"/>
          <Input name="Senha" type="password" className="inputForm"/>
          <Input type="submit" className="defaultBtn" value="Entrar"/>
         </form>
      </div>
    </section>
  )
}

export default Login