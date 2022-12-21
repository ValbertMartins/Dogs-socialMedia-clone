import React from 'react'
import styles from "../../css/Auth.module.css"
import Input from './Input'
import  { useNavigate, useSearchParams } from "react-router-dom"
const ResetPassword = () => {
  const navigate = useNavigate()
  const [ qs ] = useSearchParams()
  const [ newPassword , setNewPassword ] = React.useState("")
  const [ key ] = React.useState(qs.get("key"))
  const [ login ] = React.useState(qs.get("login"))

  
  async function handlerResetPassword(event){
    event.preventDefault()

    const response = await fetch(`https://dogsapi.origamid.dev/json/api/password/reset`, { 
      method: "POST",
      headers: { 
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        login,
        key,
        password: newPassword
      })
    })
    if(response.ok)
      navigate("/login")
  }

  return (
    <section className={`${styles.loginSection}`}>
      <div className={styles.outdoorContainer}>
      </div>

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
    </section>
  )
}

export default ResetPassword