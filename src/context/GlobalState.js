import  React from "react";
export const GlobalState = React.createContext()

export const GlobalStateStore = (props) => {


  const [ userInfo , setUserInfo ] = React.useState(null)
 
  

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
