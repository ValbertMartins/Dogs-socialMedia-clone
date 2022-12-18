import React from 'react'

export const ModalContext = React.createContext()

export const ModalProvider = ({children}) => {


  const [ idModal , setIdModal ] = React.useState(null)
  console.log(idModal)
  return (
  
    <ModalContext.Provider value={{idModal,setIdModal}}>
      {children}
    </ModalContext.Provider>
  )
}
