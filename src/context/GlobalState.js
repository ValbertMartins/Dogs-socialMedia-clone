import  React,{ createContext } from "react";
export const GlobalState = React.createContext()

export const GlobalStateStore = (props) => {


  const [ token , setToken ] = React.useState(null)
  console.log(token)
  return (
    <GlobalState.Provider value={{token,setToken}}>
        {props.children}
    </GlobalState.Provider>
  )
}
