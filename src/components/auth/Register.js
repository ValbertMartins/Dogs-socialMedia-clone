import React from 'react'
import styles from "../../css/Auth.module.css"
import Input from "./Input"
const Register = () => {


   const [ user , setUser ] = React.useState('')
   const [ email , setEmail ] = React.useState('')
   const [ password , setPassword ] = React.useState('')
   const handleSubmit = (event) => {
      // event.preventDefault()
      // console.log('submited')
   }


    return (
        <section className={`${styles.loginSection}`}>
          <div className={styles.outdoorContainer}>
          </div>
    

          <div className={`${styles.formContainer} animationLeft`}>
             <h1 className={styles.title}>Cadastre-se</h1>
             <form onSubmit={handleSubmit}>
                <Input type="text" name="Usuário" setInput={setUser} value={user}/>
                <Input type="text" name="Email" setInput={setEmail} value={email}/>
                <Input type="password" name="Senha" setInput={setPassword} value={password}/>
                <button className="defaultBtn"> Cadastrar </button>

             </form>
           </div>
         
    
        </section>
)}

export default Register