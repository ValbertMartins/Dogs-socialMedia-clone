/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import  React from "react";
import { createUserAuthOptions, createValidateTokenOptions } from "../services/api/requestOptions";
export const Auth = React.createContext()

export const AuthProvider = (props) => {

  const [ userAuth , setUserAuth ] = React.useState(null)
  const [ localToken , setLocalToken ] = React.useState(localStorage.getItem('token'))
  
  //store localToken and actualize localstore to actual localToken 
  React.useEffect(() =>  { 
    if(localToken){
      localStorage.setItem('token', localToken)
    }
  }, [localToken])
 

  //validate localToken
  React.useEffect(() => {

    async function requestUserAuth(){
      const configRequest = createUserAuthOptions(localToken)
      const response = await axios(configRequest)
      setUserAuth(response.data)

    }

    async function requestTokenValidate(){
      const configRequest = createValidateTokenOptions(localToken)
      try {
        await axios(configRequest)
        requestUserAuth()

      } catch(error){
        setUserAuth(false)
        window.localStorage.removeItem("token")
      }
    }
    
    if(localToken){
      requestTokenValidate()
    }
    
  }, [localToken])



  function logout(){
    setUserAuth(null)
    window.localStorage.removeItem("token")
  }
 
  return (

    <Auth.Provider value={{ 
      userAuth , 
      setUserAuth,  
      localToken , 
      setLocalToken,
      logout
    }
      }>
        {props.children}
    </Auth.Provider>
  )
}
