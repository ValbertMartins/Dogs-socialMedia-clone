import React from 'react'
import { Routes , Route , Link} from 'react-router-dom'
import styles from "../../css/Auth.module.css"
import Input from './Input'
const Login = () => {
  return (
    <section className={`${styles.loginSection}`}>
      <div className={styles.outdoorContainer}>
      </div>


      <div className={`${styles.formContainer} animationLeft`}>
         <h1 className={styles.title}>Login</h1>
         <form>
          <Input name="Usuário" type="text" className="inputForm"/>
          <Input name="Senha" type="password" className="inputForm"/>
          <button className="defaultBtn"> Entrar </button> 
         </form>


         <div>
          <Link>
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

            <Link to="./register">
                <button className="defaultBtn">Cadastro</button>
            </Link>
         </div>

      </div>
     

    </section>




  )
}

export default Login