
import React from 'react'


const useFetch = (url,options) => {
  const [ response , setResponse ] = React.useState(null)
  const [ payload , setPayload ] = React.useState(null) 
  const [ error , setError ] = React.useState(false)
  const [ isLoading , setIsLoading ] = React.useState(true) 


  React.useEffect(() => {
    ( async () =>  {
      try { 
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("created new req")
        setResponse(response)
        setPayload(data)
        

      } catch(erro){ 
        setError(erro)

      } finally { 
          setIsLoading(false)
      }

    
    })()
  }, [url])
  
  return { payload , isLoading , error , response , setIsLoading}
}


export default useFetch