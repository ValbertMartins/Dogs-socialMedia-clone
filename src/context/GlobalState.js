import  React,{ createContext } from "react";
export const GlobalState = React.createContext()

export const GlobalStateStore = (props) => {


  const [ userInfo , setUserInfo ] = React.useState(null)



  React.useEffect(() => {

    if(userInfo){
      const { token } = userInfo
      localStorage.setItem('token' , token)

    }

  } , [userInfo])
  


  async function fetchApi(url, options){
    try {
      const response = await fetch(url, options)
      const payload = await response.json()
      return [ payload , response ]

      
    }catch(error){
      throw new Error
    }


  }


  return (
    <GlobalState.Provider value={{ userInfo , setUserInfo , fetchApi}}>
        {props.children}
    </GlobalState.Provider>
  )
}
