import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalState } from '../../context/GlobalState'
import styles from "../../css/Auth.module.css"
import useLocalStorage from '../../hooks/useLocalStorage'
import Input from './Input'



// const set1 = new Set()
// set1.add(handleSubmit)
// console.log(set1)

const Login = () => {
  const [ user , setUser ] = React.useState('')
  const [ password , setPassword ] = React.useState('')
  const [ isLoading , setIsLoading ] = React.useState(false)
  const [ errorLogin , setErrorLogin ] = React.useState(false)
  const { setUserInfo, fetchApi } = React.useContext(GlobalState)  

  const navigate = useNavigate()
  
  const [ localToken , setLocalToken ] = useLocalStorage()

  React.useEffect(() => {
    
    if(localToken){

      (async () => {
        const [ payload ] = await fetchApi(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate`, {

          method: "POST", 
          headers: {"Content-type": "application/json", authorization: `Bearer ${localToken}`}
        })
        if(payload.data.status === 200) return navigate('/profile')
        
      })()
      
    }
  } , [localToken])
 

  const options =  {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      username: user,
      password: password
    })

  }


  
  const handleSubmit = ( event => {
    event.preventDefault()
    
    setIsLoading(true)

    if(password && user){
      setIsLoading(true)
      setErrorLogin(false);

      ( async () => {
        // try {
        //   const response = await fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, options)
        //   const data = await response.json()
        //   setToken(data)
        //   console.log(data)
        //   setIsLoading(false)
          
        // }catch(error){
        //   setErrorLogin(true)
        // }

        const [ payload , response] = await fetchApi(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, options)
        if(!response.ok) return setErrorLogin(true)
        setUserInfo(payload)
        setLocalToken(payload.token)
        
      })() 
    } 
  })

 

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
        
          {errorLogin && <p style={{color: "red"}}> Dados incorretos </p> } 

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