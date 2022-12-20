import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../../context/Auth'
import styles from "../../css/Auth.module.css"
import Input from "./Input"




const Register = () => {

   React.useEffect(() => { 
      document.title = `Register | Dogs`
    } , [])

   const [ user , setUser ] = React.useState('')
   const [ email , setEmail ] = React.useState('')
   const [ password , setPassword ] = React.useState('')
   const [ errorSubmit , setErrorSubmit ] = React.useState(false)
   
   const { fetchApi , setLocalToken } = React.useContext(Auth) 
   const navigate = useNavigate()

   const handleSubmit = (event) => {
      event.preventDefault();
      
     
      ( async () => {
         //register user
         const [ payload , response] = await fetchApi(`https://dogsapi.origamid.dev/json/api/user`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
               username: user,
               password: password,
               email: email
            })  
         })

         if(response.ok){
            //login user
            const [ payloadToken , responseToken ] = await fetchApi(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
               method: "POST",
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({
                  username: user,
                  password: password
               })

            })
               if(responseToken.ok) {
                  setLocalToken(payloadToken.token)
                  navigate('/profile')
               } 
         
         } else {
            setErrorSubmit(payload.message)
         }
         
         
         
       })() 
      
   }


    return (
        <section className={`${styles.loginSection}`}>
          <div className={styles.outdoorContainer}>
          </div>
    

          <div className={`${styles.formContainer} animationLeft`}>
             <h1 className={styles.title}>Cadastre-se</h1>
             <form onSubmit={handleSubmit}>
                <Input type="text" name="Usuário" setInput={setUser} value={user} required={true}/>
                <Input type="text" name="Email" setInput={setEmail} value={email} required={true}/>
                <Input type="password" name="Senha" setInput={setPassword} value={password} required={true}/>
                <button className="defaultBtn"> Cadastrar </button>
                <p style={{
                  color: 'red'
                }}>
                  {errorSubmit}
                </p>
             </form>
           </div>
         
    
        </section>
)}

export default Register