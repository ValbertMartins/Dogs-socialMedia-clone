import React from 'react'
import { Auth } from '../../context/Auth'
import styles from "../../css/Auth.module.css"
import Input from './Input'
import LoginRouteLinks from './LoginRouteLinks'

const Login = () => {
  const [ user , setUser ] = React.useState('')
  const [ password , setPassword ] = React.useState('')
  const [ isLoading , setIsLoading ] = React.useState(false)
  const [ errorLogin , setErrorLogin ] = React.useState(false)
  const { fetchApi , setLocalToken } = React.useContext(Auth)  

  
  const options =  {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      username: user,
      password: password
    })

  }

  const handleSubmit = async ( event ) => {
    event.preventDefault()
   
    if(password && user){
      setIsLoading(true)
      setErrorLogin(false)

      const [ payload , response] = await fetchApi(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, options)
      if(!response.ok) {
        setIsLoading(false)
        return setErrorLogin(true)
      } 
      setLocalToken(payload.token)
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


