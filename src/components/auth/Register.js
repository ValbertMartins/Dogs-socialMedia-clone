import React from 'react'
import styles from "../../css/Auth.module.css"
import Input from "./Input"
const Register = () => {
    return (
        <section className={`${styles.loginSection}`}>
          <div className={styles.outdoorContainer}>
          </div>
    

          <div className={`${styles.formContainer} animationLeft`}>
             <h1 className={styles.title}>Cadastre-se</h1>
             <form>
                <Input type="text" name="Usuário"/>
                <Input type="text" name="Email"/>
                <Input type="password" name="Senha"/>
                <button className="defaultBtn"> Cadastrar </button>

             </form>
           </div>
         
    
        </section>
)}

export default Register