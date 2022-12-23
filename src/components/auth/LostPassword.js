import React from 'react'
import styles from "../../css/Auth.module.css"
import Input from "../auth/Input"
import { createLostPasswordOptions } from "../../services/api/requestOptions"
import axios from 'axios'

const LostPassword = () => {

  const [ login , setLogin ] = React.useState('')
  const [ error , setError ] = React.useState(false)
  const [ success , setSuccess ] = React.useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
  
    const configRequest = createLostPasswordOptions(login)
    try { 
      const response = await axios(configRequest)
      const { data } = response
      setSuccess(data)
      setError(false)
      
    } catch(error){
      setError(error.response.data.message)
      return setSuccess(false)
    }
    
  }

  return (
    <div className={`${styles.formContainer} animationLeft`}>
      <h1 className={styles.title}>Perdeu a senha?</h1>
        { !success && 
          <form onSubmit={handleSubmit}>
            <Input type="text" 
              name="Email / usuário" 
              setInput={setLogin} 
              value={login} 
              required={true}
              />
            <button className="defaultBtn">Enviar Email</button>
          </form>
        }
        { error && <span style={{color: "red"}}>{error}</span> }
        { success && <span style={{color: "yellowgreen"}}>{success}</span>}   
    </div>
   
  )
}

export default LostPassword