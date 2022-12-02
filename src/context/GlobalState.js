import  React,{ createContext } from "react";
export const GlobalState = React.createContext()

export const GlobalStateStore = (props) => {
  return (
    <GlobalState.Provider value={"pedro"}>
        {props.children}
    </GlobalState.Provider>
  )
}
