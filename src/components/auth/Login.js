import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../context/GlobalState'
import styles from "../../css/Auth.module.css"
import useFetch from '../../hooks/useFetch'
import Input from './Input'

  

const Login = () => {
  const [ user , setUser ] = React.useState('')
  const [ password , setPassword ] = React.useState('')
  const [ isLoading , setIsLoading ] = React.useState(false)
  const { setToken } = React.useContext(GlobalState)  


  
  const options =  {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      username: user,
      password: password
    })

  }

  const handleSubmit = event => {
    event.preventDefault()


    if(password && user){
      setIsLoading(true)
      fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, options)
        .then( response => response.json())
          .then( data => {
             setToken(data)
             setIsLoading(false)
          }) 
    }
  } 

  return (
    <section className={`${styles.loginSection}`}>
      <div className={styles.outdoorContainer}>
      </div>


      <div className={`${styles.formContainer} animationLeft`}>
         <h1 className={styles.title}>Login</h1>
         <form onSubmit={handleSubmit}>
          <Input name="Usuário" type="text" value={user} setInput={setUser}/>
          <Input name="Senha" type="password" value={password} setInput={setPassword}/>
          <button className="defaultBtn"> {isLoading ? "Carregando": "Entrar"} </button> 
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