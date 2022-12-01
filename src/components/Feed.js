import React from 'react'
import PostCollection from './PostCollection'





const Feed = () => {

    const [ feed, setFeed ] = React.useState([])
    const [ currentPage, setCurrentPage ] = React.useState(1)
    const [ alreadyExistsPage, setAlreadyExistsPage ] = React.useState(true)
    const [ contentEnd , setContentEnd ] = React.useState(false)


    React.useEffect(() => {

      ( async () => {
        const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=${currentPage}&user=0`)
        const json = await response.json()   
        
        if( json.length > 0){
          setFeed( oldFeed => [...oldFeed, json ])
        } else { 
          setContentEnd(true)
          setAlreadyExistsPage(false)
        }
        
           
      })();
      
  
    }, [currentPage])
 
   
    
    
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        
        entries.forEach(entry => {
          
          if(entry.isIntersecting){
            
            // if(alreadyExistsPage){
            //   setCurrentPage( oldValue => oldValue + 1)
            // } else {
            //   observer.unobserve(document.querySelector("#footer"))
      
            // }

            alreadyExistsPage ? 
              setCurrentPage( oldValue => oldValue + 1) : 
                observer.unobserve(document.querySelector("#footer"))
          }

          

        })

      }, {
        root:null,
        threshold: 0.8
        
      })
      
      observer.observe(document.querySelector("#footer"))

      return () => observer.unobserve(document.querySelector("#footer"))
      
    }, [alreadyExistsPage])

    
   
    
    
   
  return (

    <section className={`container feed`}>
       
       {feed.map( (collectionPosts,index) => {
        
          return ( 
              <PostCollection collectionPosts={collectionPosts} key={index}/>   
            )
          }
        )}


        {contentEnd && <p className="contentEnd">Não existem mais postagens</p>}
    </section>

  )

}

export default Feed