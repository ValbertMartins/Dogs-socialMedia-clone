import React from 'react'
import { Auth } from '../../context/Auth'
import styles from "../../css/Auth.module.css"
import Input from './Input'
import LoginRouteLinks from './LoginRouteLinks'
import { createLoginOptions } from "../../services/api/requestOptions"
import axios from 'axios'

const Login = () => {
  const [ user , setUser ] = React.useState('')
  const [ password , setPassword ] = React.useState('')
  const [ isLoading , setIsLoading ] = React.useState(false)
  const [ errorLogin , setErrorLogin ] = React.useState(false)
  const { setLocalToken } = React.useContext(Auth)  

  const handleSubmit = async ( event ) => {
    event.preventDefault()
    
    if(password && user){
      setIsLoading(true)
      const configRequest = createLoginOptions(user, password)
      setErrorLogin(false)

      try { 
        const response = await axios(configRequest) 
        setLocalToken(response.data.token)

      } catch(error){
         setErrorLogin(true)
         setIsLoading(false)
         
      } 
    } 
  }

  return (
    <div className={`${styles.formContainer} animationLeft`}>
      <h1 className={styles.title}>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input name="Usuário" type="text" value={user} setInput={setUser}/>
        <Input name="Senha" type="password" value={password} setInput={setPassword}/>
        <button 
          className="defaultBtn" 
          style={ isLoading ? {
            cursor: "wait",
            backgroundColor: "#fea"
          } : { cursor:"pointer"}}> 
          {isLoading ? "Carregando": "Entrar"} 
        </button>
      </form>
  
      {errorLogin && <p style={{color: "red"}}> Dados incorretos </p> } 
      <LoginRouteLinks/>
    </div>
      
     

      




  )
}

export default Login


