import React from 'react'


const useFetch = (url,options, updateFetching) => {
  const [ response , setResponse ] = React.useState(null)
  const [ payload , setPayload ] = React.useState(null) 
  const [ error , setError ] = React.useState(false)
  const [ isLoading , setIsLoading ] = React.useState(true) 

  React.useEffect(() => {
    setIsLoading(true);
    ( async () =>  {
      try {      
        const response = await fetch(url, options)
        const data = await response.json()
        setResponse(response)
        setPayload(data)

      } catch(erro){ 
        setError(erro)

      } finally {
            setIsLoading(false)
   
      }

    
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url,updateFetching])
  
  return { payload , isLoading , error , response , setIsLoading}
}


export default useFetch