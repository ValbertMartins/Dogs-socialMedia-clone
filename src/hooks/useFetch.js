import React from 'react'

// const useFetch = () => {

//   const [ json , setJson ] = React.useState(null) 

  



//   const fetchData = async (url,options) => {
//     const response = await fetch(url, options)
//     const data = await response.json()
//     setJson(data)
//   }
   
  
//   return {json , fetchData}


// }



const useFetch = (url,options) => {

  const [ payload , setPayload ] = React.useState(null) 
  const [ error , setError ] = React.useState(false)
  const [ isLoading , setIsLoading ] = React.useState(true) 


  React.useEffect(() => {
    ( async () =>  {

      try { 
        const response = await fetch(url, options)
        const data = await response.json()
        setPayload(data)
        setIsLoading(false)

      } catch(erro){ 

        setError(true)

      } finally { 
          setIsLoading(false)
      }

    
    })()

    // fetch(url, options)
    //   .then( response => response.json())
    //       .then( data =>  setJson(data))
 

  }, [])
  
  return {payload, isLoading , error}
}


export default useFetch