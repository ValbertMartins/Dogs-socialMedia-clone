import React from 'react'
import styles from "../../css/Auth.module.css"
import Input from './Input'
import  { useNavigate, useSearchParams } from "react-router-dom"
import { createResetPasswordOptions } from '../../services/api/requestOptions'
import axios from 'axios'
const ResetPassword = () => {
  const navigate = useNavigate()
  const [ qs ] = useSearchParams()
  const [ newPassword , setNewPassword ] = React.useState("")
  const [ key ] = React.useState(qs.get("key"))
  const [ login ] = React.useState(qs.get("login"))

  
  async function handlerResetPassword(event){
    event.preventDefault()
    const configRequest = createResetPasswordOptions(login,key,newPassword)
    try {
      await axios(configRequest) 
      navigate("/login")

    } catch(error){
      console.log(error)
    } 
  }

  return (
      <div className={`${styles.formContainer} animationLeft`}>
        <h1 className={styles.title}>Resete a senha</h1>
        <form onSubmit={handlerResetPassword}>
          
          <Input 
            type="password" 
            name="Nova senha" 
            setInput={setNewPassword} 
            value={newPassword} 
            required={true}
          />
          
          <button className="defaultBtn">Resetar</button>
        </form>
      </div>
  )
}

export default ResetPassword