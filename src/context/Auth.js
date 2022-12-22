import  React from "react";
export const Auth = React.createContext()

export const AuthProvider = (props) => {

  
  const [ userAuth , setUserAuth ] = React.useState(null)
  const [ validatedToken , setValidatedToken ] = React.useState(false)
  const [ localToken , setLocalToken ] = React.useState(localStorage.getItem('token'))
  
  
  //store localToken
  React.useEffect(() =>  { 

    if(localToken){
      localStorage.setItem('token', localToken)
    }
  }, [localToken])
 
  //validate localToken
  React.useEffect(() => {

    if(localToken){

      (async () => {
        const [ , response ] = await fetchApi(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate`, {
          method: "POST", 
          headers: {
            "Content-type": "application/json", 
            authorization: `Bearer ${localToken}`
          }
        })   
        if(!response.ok) {
          return setUserAuth(false)
        }
        setValidatedToken(true)
      })()
    }


  }, [localToken])


  //save user infos
  React.useEffect(() => {       
    if(validatedToken){
      (async () => {
          const [ payload ] = await fetchApi(`https://dogsapi.origamid.dev/json/api/user`, {
            method: "GET", 
            headers: {
              "Content-type": "application/json", 
              authorization: `Bearer ${localToken}`
            }
          })      
          setUserAuth(payload)
        })()
    }
     
  } , [validatedToken])

  
  async function fetchApi(url, options){
    try {
      const response = await fetch(url, options)
      const payload = await response.json()
      return [ payload , response ]

      
    }catch(error){
      throw new Error()
    }


  }


  return (

    <Auth.Provider value={{ 
      userAuth , 
      setUserAuth , 
      fetchApi, 
      localToken , 
      setLocalToken,
      validatedToken,
      setValidatedToken
    }
      }>
        {props.children}
    </Auth.Provider>
  )
}
