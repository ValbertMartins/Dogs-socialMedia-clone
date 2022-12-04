import React from 'react'

const useLocalStorage = () => {
 
  const  [ localToken , setLocalToken ] = React.useState(localStorage.getItem('token'))

  


  React.useEffect(() =>  {

    localStorage.setItem('token', localToken)
  }, [localToken])

  return [localToken, setLocalToken]

  
}

export default useLocalStorage