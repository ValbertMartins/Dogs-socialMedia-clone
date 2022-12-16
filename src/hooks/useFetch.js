
import React from 'react'


const useFetch = (url,options, updateFetching) => {
  const [ response , setResponse ] = React.useState(null)
  const [ payload , setPayload ] = React.useState(null) 
  const [ error , setError ] = React.useState(false)
  const [ isLoading , setIsLoading ] = React.useState(true) 


  React.useEffect(() => {
    ( async () =>  {
      try { 
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("new req")
        setResponse(response)
        setPayload(data)
        

      } catch(erro){ 
        setError(erro)

      } finally { 
          setIsLoading(false)
      }

    
    })()
  }, [url,updateFetching])
  
  return { payload , isLoading , error , response , setIsLoading}
}


export default useFetch