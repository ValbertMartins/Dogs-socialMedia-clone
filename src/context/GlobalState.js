import  React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const GlobalState = React.createContext()

export const GlobalStateStore = (props) => {


  const [ userInfo , setUserInfo ] = React.useState(null)
  
  const [ localToken , setLocalToken ] = useLocalStorage()

  // console.log(userInfo,'foo')
  // React.useEffect(() => {
  //   if(localToken){ 

  //   }
  // }, [])

  


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

    <GlobalState.Provider value={{ userInfo , setUserInfo , fetchApi}}>
        {props.children}
    </GlobalState.Provider>
  )
}
