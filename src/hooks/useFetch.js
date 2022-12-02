import React from 'react'

const useFetch = () => {

  const [ json , setJson ] = React.useState(null) 



  const fetchData = async (url,options) => {
      const response = await fetch(url, options)
      const data = await response.json()
      setJson(data)
  }

  
  return { json , fetchData }
}

export default useFetch