import React from 'react'
import styles from "../../css/Auth.module.css"
import Input from "../auth/Input"
const LostPassword = () => {

  const [ login , setLogin ] = React.useState('')
  const [ error , setError ] = React.useState(false)
  const [ success , setSuccess ] = React.useState(false)



  
  const handleSubmit = async event => {
    event.preventDefault()
    console.log(login)
    const response = await fetch("https://dogsapi.origamid.dev/json/api/password/lost", {
      method: "POST", 
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        login : login, 
        url: "http://localhost:3000/login/reset"
      })
    })
    const payload = await response.json()
    
    if(!response.ok){ 
      setSuccess(false)
      return setError(payload.message)
    }
    setSuccess(payload)
    setError(false)
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