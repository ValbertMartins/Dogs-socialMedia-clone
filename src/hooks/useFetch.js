import React from 'react'

export const useFetch = (url, options) => {
    const [ data , setData ] = React.useState(null) 
    const [ error , setError ] = React.useState(null)


    const fetchData = React.useCallback( async () => {
        try {
            const response = await fetch(url, options)
            const json = await response.json()
            setData(json)

        } catch(erro){
            setError(erro)
        }
       
    } )
    
    React.useEffect(() => {

        fetchData(url, options)
       
    } , [])

    return {data,error}

}

