import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalState } from '../../context/GlobalState'
import styles from "../../css/Auth.module.css"
import Input from './Input'

const Login = () => {
  const [ user , setUser ] = React.useState('')
  const [ password , setPassword ] = React.useState('')
  const [ isLoading , setIsLoading ] = React.useState(false)
  const [ errorLogin , setErrorLogin ] = React.useState(false)
  const { fetchApi , setLocalToken ,  userAuth } = React.useContext(GlobalState)  

  const navigate = useNavigate()
   
  React.useEffect(() => {

    if(userAuth){
      navigate('/profile')
    }
  } , [userAuth,navigate])
 

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
   
    if(password && user){
      setIsLoading(true)
      setErrorLogin(false);

      ( async () => {
       
        const [ payload , response] = await fetchApi(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, options)

        if(!response.ok) {
          setIsLoading(false)
          return setErrorLogin(true)
        } 
        
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


