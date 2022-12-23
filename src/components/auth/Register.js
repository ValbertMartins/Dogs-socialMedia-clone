import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../../context/Auth'
import styles from "../../css/Auth.module.css"
import Input from "./Input"
import { createLoginOptions ,createRegisterOptions } from "../../services/api/requestOptions"
import axios from 'axios'

const Register = () => {

  React.useEffect(() => { 
  document.title = `Register | Dogs`
  } , [])

  const [ user , setUser ] = React.useState('')
  const [ email , setEmail ] = React.useState('')
  const [ password , setPassword ] = React.useState('')
  const [ errorSubmit , setErrorSubmit ] = React.useState(false)
  const { setLocalToken } = React.useContext(Auth) 
  const navigate = useNavigate()

  const handleSubmit = async event => {
  event.preventDefault();

    //req options
    const configRequestRegister = createRegisterOptions(user,password,email)
    const configRequestLogin = createLoginOptions(user,password)

    try { 
      await axios(configRequestRegister)
      const responseLogin  = await axios(configRequestLogin)
      setLocalToken(responseLogin.data.token)
      navigate('/profile')

    } catch(error){
      console.log(error)
      setErrorSubmit(error.response.data.message)
    }
  }

 return (
  <div className={`${styles.formContainer} animationLeft`}>
    <h1 className={styles.title}>Cadastre-se</h1>
    <form onSubmit={handleSubmit}>
        <Input type="text" name="Usuário" setInput={setUser} value={user} required={true}/>
        <Input type="text" name="Email" setInput={setEmail} value={email} required={true}/>
        <Input type="password" name="Senha" setInput={setPassword} value={password} required={true}/>
        <button className="defaultBtn"> Cadastrar </button>
        <p style={{color: 'red'}}>{errorSubmit}</p>
    </form>
  </div>
         
    
)}

export default Register