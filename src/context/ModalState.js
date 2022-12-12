import React from 'react'

export const ModalContext = React.createContext()

export const ModalProvider = ({children}) => {


  const [ idModal , setIdModal ] = React.useState(10)

  return (
  
    <ModalContext.Provider value={{idModal,setIdModal}}>
      {children}
    </ModalContext.Provider>
  )
}
